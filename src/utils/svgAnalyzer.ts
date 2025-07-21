export interface PathBounds {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  width: number;
  height: number;
}

export interface ViewBoxAnalysis {
  currentViewBox: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  pathBounds: PathBounds;
  suggestedViewBox: string;
  hasClipping: boolean;
  paddingRecommendation: string;
}

/**
 * Extracts numeric coordinates from SVG path data
 */
function extractCoordinates(pathData: string): number[] {
  const coordinates: number[] = [];
  
  // Remove path commands and extract numbers (including decimals and negatives)
  const numbers = pathData.match(/-?\d+\.?\d*/g);
  
  if (numbers) {
    coordinates.push(...numbers.map(num => parseFloat(num)));
  }
  
  return coordinates;
}

/**
 * Calculates the actual bounds of SVG path data
 */
export function calculatePathBounds(pathData: string): PathBounds {
  const coordinates = extractCoordinates(pathData);
  
  if (coordinates.length === 0) {
    return {
      minX: 0, minY: 0, maxX: 24, maxY: 24,
      width: 24, height: 24
    };
  }
  
  // Separate X and Y coordinates (assuming they alternate, which is common)
  const xCoords: number[] = [];
  const yCoords: number[] = [];
  
  for (let i = 0; i < coordinates.length; i += 2) {
    if (i < coordinates.length) xCoords.push(coordinates[i]);
    if (i + 1 < coordinates.length) yCoords.push(coordinates[i + 1]);
  }
  
  const minX = Math.min(...xCoords);
  const maxX = Math.max(...xCoords);
  const minY = Math.min(...yCoords);
  const maxY = Math.max(...yCoords);
  
  return {
    minX,
    minY,
    maxX,
    maxY,
    width: maxX - minX,
    height: maxY - minY
  };
}

/**
 * Parses viewBox string into components
 */
export function parseViewBox(viewBoxString: string): { x: number; y: number; width: number; height: number } {
  const values = viewBoxString.split(/\s+/).map(v => parseFloat(v));
  return {
    x: values[0] || 0,
    y: values[1] || 0,
    width: values[2] || 24,
    height: values[3] || 24
  };
}

/**
 * Analyzes SVG content and provides viewBox recommendations
 */
export function analyzeSVG(svgContent: string): ViewBoxAnalysis {
  // Extract viewBox
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const currentViewBoxString = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";
  const currentViewBox = parseViewBox(currentViewBoxString);
  
  // Extract path data
  const pathMatch = svgContent.match(/d="([^"]+)"/);
  const pathData = pathMatch ? pathMatch[1] : "";
  
  const pathBounds = calculatePathBounds(pathData);
  
  // Check for clipping
  const hasClipping = 
    pathBounds.minX < currentViewBox.x ||
    pathBounds.minY < currentViewBox.y ||
    pathBounds.maxX > (currentViewBox.x + currentViewBox.width) ||
    pathBounds.maxY > (currentViewBox.y + currentViewBox.height);
  
  // Calculate suggested viewBox with 10% padding
  const padding = Math.max(
    (pathBounds.width * 0.1),
    (pathBounds.height * 0.1),
    1 // Minimum 1 unit padding
  );
  
  const suggestedX = Math.floor(pathBounds.minX - padding);
  const suggestedY = Math.floor(pathBounds.minY - padding);
  const suggestedWidth = Math.ceil(pathBounds.width + (padding * 2));
  const suggestedHeight = Math.ceil(pathBounds.height + (padding * 2));
  
  const suggestedViewBox = `${suggestedX} ${suggestedY} ${suggestedWidth} ${suggestedHeight}`;
  
  const paddingRecommendation = hasClipping 
    ? `CRITICAL: Current viewBox clips content. Use suggested viewBox.`
    : `Current viewBox is adequate. Consider optimizing for tighter bounds.`;
  
  return {
    currentViewBox,
    pathBounds,
    suggestedViewBox,
    hasClipping,
    paddingRecommendation
  };
}

/**
 * Validates all icons in a directory and reports issues
 */
export function validateIconViewBoxes(iconComponents: Array<{ name: string; svgContent: string }>): Array<{
  name: string;
  analysis: ViewBoxAnalysis;
  needsAttention: boolean;
}> {
  return iconComponents.map(({ name, svgContent }) => {
    const analysis = analyzeSVG(svgContent);
    const needsAttention = analysis.hasClipping;
    
    return {
      name,
      analysis,
      needsAttention
    };
  });
}

/**
 * Generates a detailed report for icon viewBox analysis
 */
export function generateValidationReport(validationResults: ReturnType<typeof validateIconViewBoxes>): string {
  const problematicIcons = validationResults.filter(result => result.needsAttention);
  
  let report = `# Icon ViewBox Validation Report\n\n`;
  report += `**Total Icons Analyzed:** ${validationResults.length}\n`;
  report += `**Icons with Issues:** ${problematicIcons.length}\n\n`;
  
  if (problematicIcons.length > 0) {
    report += `## ⚠️ Icons Requiring Attention\n\n`;
    
    problematicIcons.forEach(({ name, analysis }) => {
      report += `### ${name}\n`;
      report += `- **Current ViewBox:** \`${analysis.currentViewBox.x} ${analysis.currentViewBox.y} ${analysis.currentViewBox.width} ${analysis.currentViewBox.height}\`\n`;
      report += `- **Suggested ViewBox:** \`${analysis.suggestedViewBox}\`\n`;
      report += `- **Path Bounds:** X: ${analysis.pathBounds.minX.toFixed(1)} to ${analysis.pathBounds.maxX.toFixed(1)}, Y: ${analysis.pathBounds.minY.toFixed(1)} to ${analysis.pathBounds.maxY.toFixed(1)}\n`;
      report += `- **Issue:** ${analysis.paddingRecommendation}\n\n`;
    });
  }
  
  const goodIcons = validationResults.filter(result => !result.needsAttention);
  if (goodIcons.length > 0) {
    report += `## ✅ Icons with Proper ViewBox\n\n`;
    goodIcons.forEach(({ name }) => {
      report += `- ${name}\n`;
    });
  }
  
  return report;
} 
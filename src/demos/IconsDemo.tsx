import React, { useState, useMemo } from 'react';
import { CopyToClipboardButton } from '../components/CopyToClipboardButton';
import { TextInput } from '../components/TextInput';
import './IconsDemo.css';

// Import all Flaticon icons
import * as Icons from '../components/icons';
// Import Material UI icons specifically
import { ContentCopyFilledIcon, CheckFilledIcon } from '../components/icons';

export const IconsDemo: React.FC = () => {
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const [filterText, setFilterText] = useState('');

  const copyToClipboard = async (svgContent: string, iconName: string) => {
    try {
      await navigator.clipboard.writeText(svgContent);
      setCopiedIcon(iconName);
      setTimeout(() => setCopiedIcon(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = svgContent;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedIcon(iconName);
      setTimeout(() => setCopiedIcon(null), 2000);
    }
  };

  // Filter to get only FiRr icons (Flaticons) and create icon list
  const allIconList = useMemo(() => 
    Object.keys(Icons)
      .filter(key => key.startsWith('FiRr') && !key.endsWith('Icon'))
      .sort()
      .map(iconKey => {
        const IconComponent = (Icons as any)[iconKey];
        const displayName = iconKey
          .replace('FiRr', '')
          .replace(/([A-Z])/g, ' $1')
          .trim();
        const label = iconKey
          .replace('FiRr', 'fi-rr')
          .replace(/([A-Z])/g, '-$1')
          .toLowerCase();
        
        return {
          name: displayName,
          component: IconComponent,
          label: label,
          key: iconKey
        };
      }), []
  );

  // Material UI icons (including both ContentCopy/CheckFilled and Material UI style icons)
  const allMuiIcons = useMemo(() => {
    const baseMuiIcons = [
      {
        name: 'Content Copy Filled',
        component: ContentCopyFilledIcon,
        label: 'content-copy-filled',
        key: 'ContentCopyFilled'
      },
      {
        name: 'Check Filled',
        component: CheckFilledIcon,
        label: 'check-filled',
        key: 'CheckFilled'
      }
    ];

    const muiStyleIcons = Object.keys(Icons)
      .filter(key => 
        (key === 'ArrowDropdownFilledIcon' || key === 'ChevronLeftFilledIcon' || 
         key === 'ChevronRightFilledIcon' || key === 'CodeRoundedIcon' ||
         key === 'ExpandLessFilledIcon' || key === 'ExpandMoreFilledIcon' || 
         key === 'FilterListFilledIcon' || key === 'LinkOffFilledIcon' ||
         key === 'PeopleAltRoundedIcon' || key === 'UnfoldLessFilledIcon' ||
         key === 'UnfoldMoreFilledIcon' || key === 'VerticalSplitOutlinedIcon')
      )
      .sort()
      .map(iconKey => {
        const IconComponent = (Icons as any)[iconKey];
        
        // Convert component name to proper spaced format
        let displayName = iconKey
          .replace('Icon', '')
          .replace(/([A-Z])/g, ' $1')
          .trim();
        
        // Generate clean kebab-case label (no prefix/suffix)
        const label = iconKey
          .replace('Icon', '')
          .replace(/([A-Z])/g, '-$1')
          .toLowerCase()
          .replace(/^-/, ''); // Remove leading hyphen
        
        return {
          name: displayName,
          component: IconComponent,
          label: label,
          key: iconKey
        };
      });

    return [...baseMuiIcons, ...muiStyleIcons];
  }, []);

  // Custom Icon icons (Insights, Compass, Resize, FolderSelectedIconSolid, etc.)
  const allCustomIcons = useMemo(() => 
    Object.keys(Icons)
      .filter(key => 
        key === 'InsightsOutlinedIcon' || key === 'CodeBranchBoldIcon' ||
        key === 'CompassIcon' || key === 'GenaiIcon' || key === 'GroundingIcon' ||
        key === 'IncognitoOffIcon' || key === 'LookupsIcon' || key === 'MarketplaceAltIcon' ||
        key === 'MarketplaceIcon' || key === 'MergeIcon' || key === 'RestApiIcon' ||
        key === 'SplitIcon' || key === 'WorkgroupIcon' || key === 'IconResizeIcon' ||
        key === 'FolderSelectedIconSolidIcon'
      )
      .sort()
      .map(iconKey => {
        const IconComponent = (Icons as any)[iconKey];
        
        // Convert component name to proper spaced format, removing redundant "Icon" prefix
        let displayName = iconKey
          .replace('Icon', '')
          .replace(/([A-Z])/g, ' $1')
          .trim();
        
        // Generate clean kebab-case label (no prefix/suffix)
        const label = iconKey
          .replace('Icon', '')
          .replace(/([A-Z])/g, '-$1')
          .toLowerCase()
          .replace(/^-/, ''); // Remove leading hyphen
        
        return {
          name: displayName,
          component: IconComponent,
          label: label,
          key: iconKey
        };
      }), []
  );

  // Filter icons based on search text
  const filteredIconList = useMemo(() => {
    if (!filterText.trim()) return allIconList;
    
    const searchTerm = filterText.toLowerCase();
    return allIconList.filter(icon => 
      icon.name.toLowerCase().includes(searchTerm) ||
      icon.label.toLowerCase().includes(searchTerm) ||
      icon.key.toLowerCase().includes(searchTerm)
    );
  }, [allIconList, filterText]);

  const filteredMuiIcons = useMemo(() => {
    if (!filterText.trim()) return allMuiIcons;
    
    const searchTerm = filterText.toLowerCase();
    return allMuiIcons.filter(icon => 
      icon.name.toLowerCase().includes(searchTerm) ||
      icon.label.toLowerCase().includes(searchTerm) ||
      icon.key.toLowerCase().includes(searchTerm)
    );
  }, [allMuiIcons, filterText]);

  const filteredCustomIcons = useMemo(() => {
    if (!filterText.trim()) return allCustomIcons;
    
    const searchTerm = filterText.toLowerCase();
    return allCustomIcons.filter(icon => 
      icon.name.toLowerCase().includes(searchTerm) ||
      icon.label.toLowerCase().includes(searchTerm) ||
      icon.key.toLowerCase().includes(searchTerm)
    );
  }, [allCustomIcons, filterText]);

  const totalIcons = allIconList.length + allMuiIcons.length + allCustomIcons.length;
  const filteredTotal = filteredIconList.length + filteredMuiIcons.length + filteredCustomIcons.length;

  return (
    <div className="icons-demo">
      <h2 className="demo-title">Icon Gallery</h2>
      <p className="demo-description">
        Browse all {totalIcons} icons in the design system. Search by name or icon code to quickly find the perfect icon for your project.
        All icons are consistently sized and optimized for web use.
      </p>

      {/* Filter Input */}
      <div className="filter-container" style={{ 
        margin: '20px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
      }}>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <TextInput
            label=""
            placeholder="Search icons... (e.g., 'arrow', 'user', 'fi-rr-home')"
            value={filterText}
            onChange={setFilterText}
            helpText={filterText ? `Showing ${filteredTotal} of ${totalIcons} icons` : `${totalIcons} icons available`}
            showHelpIcon={false}
            className="icon-search-input"
          />
        </div>
      </div>

      {/* Flaticon Icons Section */}
      {filteredIconList.length > 0 && (
        <section className="icons-section">
          <h3 className="section-title">Flaticon Regular Icons ({filteredIconList.length})</h3>
          <p className="section-description">
            Comprehensive collection of Flaticon Regular icons with consistent 24x24 sizing and optimized SVG paths.
          </p>
          <div className="icons-grid">
            {filteredIconList.map((icon) => {
              const IconComponent = icon.component;
              
              return (
                <div key={icon.key} className="icon-item">
                  <div className="icon-preview">
                    <IconComponent size={24} />
                  </div>
                  <div className="icon-info">
                    <h3 className="icon-name">{icon.name}</h3>
                    <span className="icon-label">{icon.label}</span>
                  </div>
                  <div className="icon-actions">
                    <CopyToClipboardButton
                      state={copiedIcon === icon.label ? 'copied' : 'default'}
                      onClick={() => copyToClipboard('<svg><!-- SVG content --></svg>', icon.label)}
                      label="Copy SVG"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Material UI Icons Section */}
      {filteredMuiIcons.length > 0 && (
        <section className="icons-section">
          <h3 className="section-title">Material UI Icons ({filteredMuiIcons.length})</h3>
          <p className="section-description">
            Material UI icons including filled variants, arrows, chevrons, and other UI elements for consistent design system integration.
          </p>
          <div className="icons-grid">
            {filteredMuiIcons.map((icon) => {
              const IconComponent = icon.component;
              
              return (
                <div key={icon.key} className="icon-item">
                  <div className="icon-preview">
                    <IconComponent size={24} />
                  </div>
                  <div className="icon-info">
                    <h3 className="icon-name">{icon.name}</h3>
                    <span className="icon-label">{icon.label}</span>
                  </div>
                  <div className="icon-actions">
                    <CopyToClipboardButton
                      state={copiedIcon === icon.label ? 'copied' : 'default'}
                      onClick={() => copyToClipboard('<svg><!-- SVG content --></svg>', icon.label)}
                      label="Copy SVG"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Custom Icon Icons Section */}
      {filteredCustomIcons.length > 0 && (
        <section className="icons-section">
          <h3 className="section-title">Custom Icon Icons ({filteredCustomIcons.length})</h3>
          <p className="section-description">
            Custom icons for specific functionality including insights, compass, marketplace, and workflow icons.
          </p>
          <div className="icons-grid">
            {filteredCustomIcons.map((icon) => {
              const IconComponent = icon.component;
              
              return (
                <div key={icon.key} className="icon-item">
                  <div className="icon-preview">
                    <IconComponent size={24} />
                  </div>
                  <div className="icon-info">
                    <h3 className="icon-name">{icon.name}</h3>
                    <span className="icon-label">{icon.label}</span>
                  </div>
                  <div className="icon-actions">
                    <CopyToClipboardButton
                      state={copiedIcon === icon.label ? 'copied' : 'default'}
                      onClick={() => copyToClipboard('<svg><!-- SVG content --></svg>', icon.label)}
                      label="Copy SVG"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* No Results Message */}
      {filterText && filteredTotal === 0 && (
        <div style={{ 
          textAlign: 'center', 
          padding: '40px 20px',
          color: '#6b7280'
        }}>
          <p style={{ fontSize: '18px', marginBottom: '8px' }}>No icons found</p>
          <p style={{ fontSize: '14px' }}>
            Try searching for different keywords like "arrow", "user", or "home"
          </p>
        </div>
      )}

      <div className="demo-footer">
        <p>
          <strong>{filteredTotal} of {totalIcons} icons</strong> - {filteredIconList.length} Flaticon Regular + {filteredMuiIcons.length} Material UI + {filteredCustomIcons.length} Custom
        </p>
        <p style={{ fontSize: '14px', color: '#6B7280', marginTop: '8px' }}>
          All icons are available for import from <code>@/components/icons</code>
        </p>
      </div>
    </div>
  );
};
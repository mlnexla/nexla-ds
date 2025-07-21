import React, { useState, useRef, useEffect } from 'react';
import './TextInput.css';

// Icon components
const InfoIcon = () => (
  <i className="fi-rr-info"></i>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="8" fill="#5F606D" fillOpacity="0.2"/>
    <path d="M10.5 5.5L5.5 10.5M5.5 5.5L10.5 10.5" stroke="#5F606D" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CopyIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="6" height="6" stroke="#5F606D" strokeWidth="1"/>
    <path d="M1 1H7V2H2V7H1V1Z" fill="#5F606D"/>
  </svg>
);

export type TextInputVariant = 
  | 'default' 
  | 'hover' 
  | 'active' 
  | 'typing' 
  | 'typed' 
  | 'error' 
  | 'disabled' 
  | 'code' 
  | 'chip-empty' 
  | 'chip-selected';

export interface TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  variant?: TextInputVariant;
  showHelpIcon?: boolean;
  helpText?: string;
  error?: string;
  disabled?: boolean;
  chips?: Array<{ id: string; label: string; count?: number }>;
  onChipRemove?: (chipId: string) => void;
  onCopy?: () => void;
  className?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  label = 'Input Field Label',
  placeholder = 'Placeholder text',
  value = '',
  onChange,
  onFocus,
  onBlur,
  variant = 'default',
  showHelpIcon = true,
  helpText = 'Help text should be written here',
  error,
  disabled = false,
  chips = [],
  onChipRemove,
  onCopy,
  className = ''
}) => {
  const [internalValue, setInternalValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  useEffect(() => {
    if (variant === 'active' || variant === 'typing') {
      const interval = setInterval(() => {
        setShowCursor(!showCursor);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [variant, showCursor]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value);
      onCopy?.();
    }
  };

  // Determine the actual variant based on state
  const getActiveVariant = (): TextInputVariant => {
    if (disabled) return 'disabled';
    if (error) return 'error';
    if (variant !== 'default') return variant;
    
    if (isFocused && internalValue) return 'typing';
    if (isFocused) return 'active';
    if (internalValue) return 'typed';
    if (isHovered) return 'hover';
    
    return 'default';
  };

  const activeVariant = getActiveVariant();
  const isCodeVariant = variant === 'code';
  const isChipVariant = variant === 'chip-empty' || variant === 'chip-selected';

  return (
    <div className={`text-input-container ${className}`}>
      {/* Label */}
      <div className="text-input-label-container">
        <label className="text-input-label">{label}</label>
        {showHelpIcon && <InfoIcon />}
      </div>

      {/* Input Field */}
      <div className="text-input-field-container">
        {isCodeVariant ? (
          <div className="text-input-code-container">
            <div className={`text-input-field text-input-${activeVariant}`}>
              <input
                ref={inputRef}
                type="text"
                value={internalValue}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                placeholder={placeholder}
                disabled={disabled}
                className="text-input-code"
              />
            </div>
            <button className="text-input-copy-button" onClick={handleCopy}>
              <CopyIcon />
              <span>Copy</span>
            </button>
          </div>
        ) : (
          <div 
            className={`text-input-field text-input-${activeVariant}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isChipVariant && chips.length > 0 ? (
              <div className="text-input-chips">
                {chips.map(chip => (
                  <div key={chip.id} className="text-input-chip">
                    <span className="chip-label">{chip.label}</span>
                    {chip.count && <span className="chip-count">{chip.count}</span>}
                    <button 
                      className="chip-remove"
                      onClick={() => onChipRemove?.(chip.id)}
                    >
                      <CloseIcon />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-input-content">
                <input
                  ref={inputRef}
                  type="text"
                  value={internalValue}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder={placeholder}
                  disabled={disabled}
                />
                {(activeVariant === 'active' || activeVariant === 'typing') && (
                  <div className={`text-input-cursor ${showCursor ? 'show' : ''}`} />
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Help Text / Error Message */}
      {(helpText || error) && (
        <div className={`text-input-help ${error ? 'error' : ''}`}>
          {error || helpText}
        </div>
      )}
    </div>
  );
};

export default TextInput; 
import React, { useState, useRef, useEffect } from 'react';
import FiRrCrossCircle from '../icons/FiRrCrossCircle';
import { CopyToClipboardButton } from '../CopyToClipboardButton';
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

// CopyIcon removed - using CopyToClipboardButton instead

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
  icon?: React.ReactNode;
  id?: string;
  clearable?: boolean;
  onClear?: () => void;
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
  className = '',
  icon,
  id,
  clearable = false,
  onClear
}) => {
  const [internalValue, setInternalValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [copiedState, setCopiedState] = useState<'default' | 'copied'>('default');
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
      setCopiedState('copied');
      setTimeout(() => setCopiedState('default'), 2000);
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
                id={id}
              />
            </div>
            <CopyToClipboardButton
              state={copiedState}
              onClick={handleCopy}
              label="Copy"
              className="text-input-copy-button"
            />
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
                {icon && <div className="text-input-icon">{icon}</div>}
                <input
                  ref={inputRef}
                  type="text"
                  value={internalValue}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder={placeholder}
                  disabled={disabled}
                  id={id}
                />
                {clearable && internalValue && (
                  <button
                    type="button"
                    className="text-input-clear-button"
                    onClick={() => {
                      setInternalValue('');
                      onChange?.('');
                      onClear?.();
                    }}
                    aria-label="Clear input"
                    title="Clear input"
                  >
                    <FiRrCrossCircle size={16} />
                  </button>
                )}
                {(activeVariant === 'active' || activeVariant === 'typing') && (
                  <div className={`text-input-cursor ${showCursor ? 'show' : ''}`} />
                )}
              </div>
            )}
          </div>
        )}

        {/* Help Text / Error Message - moved inside field container */}
        {(helpText || error) && (
          <div className={`text-input-help ${error ? 'error' : ''}`}>
            {error || helpText}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextInput; 
import React from 'react';

interface CloseIconProps {
  className?: string;
}

export const CloseIcon: React.FC<CloseIconProps> = ({ className = 'size-10' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default CloseIcon; 
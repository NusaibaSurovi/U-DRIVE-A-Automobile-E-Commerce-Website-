import React, { useState, useId } from 'react';

interface DisclosureProps {
  title: string;
  children: React.ReactNode;
}

export const Disclosure: React.FC<DisclosureProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden', marginBottom: '12px' }}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          width: '100%',
          textAlign: 'left',
          padding: '14px 18px',
          backgroundColor: '#f9fafb',
          border: 'none',
          cursor: 'pointer',
          fontWeight: '600',
          color: '#111827',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <span>{title}</span>
        <span style={{ transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ▼
        </span>
      </button>

      <div
        id={contentId}
        hidden={!isOpen}
        style={{ padding: '16px', backgroundColor: '#ffffff', color: '#374151', borderTop: '1px solid #e5e7eb' }}
      >
        {children}
      </div>
    </div>
  );
};
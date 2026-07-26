import React, { useState, useRef, KeyboardEvent } from 'react';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
}

export const Tabs: React.FC<TabsProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState<string>(items[0]?.id || '');
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;

    if (e.key === 'ArrowRight') {
      nextIndex = (index + 1) % items.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (index - 1 + items.length) % items.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = items.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const nextTabId = items[nextIndex].id;
    setActiveTab(nextTabId);
    tabRefs.current[nextTabId]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Accessible Tabs"
        style={{ display: 'flex', gap: '8px', borderBottom: '2px solid #e5e7eb' }}
      >
        {items.map((item, index) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              ref={(el) => { tabRefs.current[item.id] = el; }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${item.id}`}
              id={`tab-${item.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(item.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              style={{
                padding: '10px 18px',
                cursor: 'pointer',
                border: 'none',
                borderBottom: isActive ? '3px solid #be185d' : '3px solid transparent',
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? '#be185d' : '#4b5563',
                backgroundColor: 'transparent',
                outline: 'none'
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {items.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <div
            key={item.id}
            id={`panel-${item.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${item.id}`}
            hidden={!isActive}
            tabIndex={0}
            style={{ padding: '16px 0', outline: 'none' }}
          >
            {item.content}
          </div>
        );
      })}
    </div>
  );
};
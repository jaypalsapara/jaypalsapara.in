import { Activity, createContext, useContext, useState, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * Tabs
 */
export function Tabs({ defaultValue, children, className }: { defaultValue: string; children: ReactNode; className?: string }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={twMerge('flex flex-col', className)}>{children}</div>
    </TabsContext.Provider>
  );
}

/**
 * TabList wrapper
 */
export function TabsList({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div role="tablist" className={twMerge('flex gap-4 border-b', className)}>
      {children}
    </div>
  );
}

/**
 * Tabs trigger
 */
export function TabsTrigger({ value, children, className }: { value: string; children: ReactNode; className?: string }) {
  const { activeTab, setActiveTab } = useTabsContext();

  return (
    <button
      role="tab"
      className={twMerge(
        'border-b-2 border-b-transparent pb-3 font-medium text-muted-foreground aria-selected:border-b-foreground aria-selected:text-foreground',
        className,
      )}
      aria-selected={activeTab === value}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
}

/**
 * Tabs content
 */
export function TabsContent({ value, children }: { value: string; children: ReactNode }) {
  const { activeTab } = useTabsContext();

  return <Activity mode={activeTab === value ? 'visible' : 'hidden'}>{children}</Activity>;
}

/**
 * Context setup
 */
const TabsContext = createContext<{
  activeTab: string;
  setActiveTab: (value: string) => void;
} | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs provider');
  }
  return context;
}

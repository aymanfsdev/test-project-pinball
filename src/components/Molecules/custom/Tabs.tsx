import '../../../styles/components/Molecules/Tabs/Tab.scss';

import React, { JSXElementConstructor, ReactElement, useState } from 'react';

interface TabProps {
  label: string;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Tab = ({ className = '', children }: TabProps) => {
  return <div className={`tab ${className}`}>{children}</div>;
};

type TabChildrenType = ReactElement<JSXElementConstructor<typeof Tab>>[];

interface TabsProps {
  activeIndex?: number;
  className?: string;
  children: TabChildrenType;
  onTabChange?: (_event: tabEventTypes) => any;
  headerComponent?: React.ReactNode;
  horizontalScroll?: boolean;
}

export type tabEventTypes = {
  activeTabIndex: number;
  activeTabLabel: string;
  previousTabIndex: number;
};

export function Tabs({
  activeIndex = 0,
  className = '',
  children,
  onTabChange,
  headerComponent,
  horizontalScroll = true,
}: TabsProps) {
  const [activeTabIndex, setActivetabIndex] = useState(activeIndex);

  const slideTo = (index: number) => {
    const tProps: any = children[index].props;
    if (onTabChange)
      onTabChange({
        activeTabIndex: index,
        activeTabLabel: tProps.label,
        previousTabIndex: activeTabIndex,
      });
    setActivetabIndex(index);
  };

  const TabHeadings = () => {
    return (
      <div className="tab-headings overflow-auto">
        <div
          className={`d-flex ${horizontalScroll ? 'flex-nowrap' : 'flex-wrap'
            } justify-content-start py-2`}>
          {children.map((tab, i) => {
            const tProps: any = tab.props;
            return tProps.label && tProps.label.length > 0 ? (
              <div className="flex-none mx-2" key={i}>
                <button
                  key={i}
                  className={`pr-5 pl-3 py-2 ${activeTabIndex === i
                      ? 'border-white text-dark-blue bg-white'
                      : 'border-black text-white bg-dark-blue'
                    } m-0 rounded-none text-xs font-bold `}
                  onClick={() => slideTo(i)}>
                  {tProps.label}
                </button>
              </div>
            ) : null;
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={`tabs ${className}`}>
      <div className="d-flex flex-wrap align-items-center justify-content-between" style={{ 'background': '#2d5474' }}>
        <div className="px-3 bg-dark-blue ">
          <TabHeadings />
        </div>
        {headerComponent && headerComponent}
      </div>
      {children[activeTabIndex]}
    </div>
  );
}

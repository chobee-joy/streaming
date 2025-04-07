import type { PropsWithChildren } from 'react';
import React from 'react';
import clsx from 'clsx';

interface TabsProps {
  hasScroll?: boolean;
  /**
   * @default true
   */
  sticky?: boolean;
}

function Tabs({
  children,
  hasScroll,
  sticky = true,
}: PropsWithChildren<TabsProps>) {
  return (
    <div className={clsx(`box-tab-area`, sticky && 'sticky')}>
      <div className="tabs-wrap">
        <div className={clsx('tabs', hasScroll && 'scroll-x-active')}>
          {React.Children.toArray(children)?.map((child, index) =>
            React.isValidElement<{ className?: string }>(child)
              ? React.cloneElement(child, {
                  key: `tabs${index}`,
                })
              : child,
          )}
        </div>
      </div>
    </div>
  );
}

export default Tabs;

'use client';

import { FC, ReactNode } from 'react';
import { useIsClient } from '../../../hooks/useIsClient';

type TStyle = 'white' | 'indigo';

export interface IWidgetProps {
  children: ReactNode;
  title?: string;
  subTitle?: string;
  header?: ReactNode;
  bg?: TStyle;
}

const Widget: FC<IWidgetProps> = ({ children, title, subTitle, header }) => {
  const isClient: boolean = useIsClient();

  if (!isClient) return null;

  return (
    <section className="bg-white h-auto m-auto border border-gray-300 rounded-lg p-4 shadow-lg">
      {/** Widget Header */}
      {header && header}
      {!header && (
        <div className="py-0">
          {title && <h3 className="text-base text-black font-bold">{title}</h3>}
          {subTitle && <h4 className="text-sm text-gray-600">{subTitle}</h4>}
        </div>
      )}

      {/** Widget Body/footer */}
      <div className="pt-2">{children}</div>
    </section>
  );
};

export default Widget;

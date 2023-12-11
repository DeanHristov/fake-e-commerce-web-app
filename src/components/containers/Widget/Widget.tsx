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
    <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md inline-block w-auto relative">
      {header}
      {!header && (
        <>
          {title && <h3 className="text-base text-black font-bold">{title}</h3>}
          {subTitle && <h4 className="text-sm text-gray-600">{subTitle}</h4>}
        </>
      )}

      {/** Widget Body/footer */}
      {children}
    </div>
  );
};

export default Widget;

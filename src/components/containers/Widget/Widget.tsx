import { FC, ReactNode } from 'react';

type TStyle = 'white' | 'indigo';

export interface IWidgetProps {
  children: ReactNode;
  title?: string;
  subTitle?: string;
  header?: ReactNode;
  bg?: TStyle;
}

const Widget: FC<IWidgetProps> = ({ children, title, subTitle, header }) => {
  return (
    <section className="bg-white w-auto h-auto rounded-2xl p-4">
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

type TooltipTextProps = {
  tipChildren?: React.ReactNode;
  children?: React.ReactNode;
  text?: string;
  className?: string;
  spanClassName?: string;
  withUnderline?: boolean;
};

export default function Tooltip({
  tipChildren,
  children,
  text,
  className,
  spanClassName,
  withUnderline,
}: TooltipTextProps) {
  return (
    <div className="relative group">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max max-w-xs bg-gray-800 text-white text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {text}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-800"></div>
      </div>
    </div>
  );
}

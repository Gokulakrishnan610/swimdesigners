import React from "react";

type StarBorderProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties['animationDuration'];
    thickness?: number;
  }

const StarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";

  return (
    <Component 
      className={`relative inline-block overflow-hidden rounded-2xl shadow-lg ${className}`} 
      {...(rest as any)}
      style={{
        padding: `${thickness}px 0`,
        ...(rest as any).style,
      }}
    >
      {/* Card content with glass effect only */}
      <div className="relative z-10 bg-white/20 backdrop-blur-md text-gray-900 text-center text-[16px] py-[32px] px-[26px] rounded-2xl flex flex-col items-center justify-center border border-white/30">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder; 
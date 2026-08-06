import * as React from "react";

type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  className?: string;
};

type AvatarFallbackProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Avatar = ({ children, className = "", ...props }: AvatarProps) => (
  <div
    className={`relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const AvatarFallback = ({
  children,
  className = "",
  style,
  ...props
}: AvatarFallbackProps) => (
  <div
    className={`flex h-full w-full items-center justify-center rounded-full ${className}`}
    style={style}
    {...props}
  >
    {children}
  </div>
);
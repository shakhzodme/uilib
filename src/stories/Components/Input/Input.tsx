import cn from "@/utils/cn";
import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "py-2 px-3 border border-primary shadow-xs rounded-lg transition-all text-md",
          "focus:shadow-ring-brand-shadow-xs focus:border-brand outline-none",
          "disabled:border-disabled disabled:text-disabled disabled:bg-disabled_subtle",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;

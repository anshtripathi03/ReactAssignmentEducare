import { forwardRef } from "react";

type Props = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="relative mb-5">
        {/* Border box */}
        <div
          className={`border rounded-md px-3 pt-4 pb-2 bg-white ${
            error ? "border-red-500" : "border-border"
          }`}
        >
          {/* Label INSIDE border */}
          <label className="absolute -top-2 left-3 bg-white px-1 text-[12px] text-primary font-medium">
            {label}
          </label>

          {/* Input */}
          <input
            ref={ref}
            {...props}
            placeholder={props.placeholder}
            className={`w-full text-[14px] bg-transparent placeholder:text-textLight outline-none ${props.className || ""}`}                    
          />
        </div>

        {error && (
          <p className="text-xs text-red-500 mt-1">{error}</p>
        )}
      </div>
    );
  }
);

export default Input;
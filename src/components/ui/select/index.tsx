import { ReactNode, useState } from "react";

interface OptionsType {
  label?: string | number;
  defaultValue?: string | number 
}

interface SelectProps {
  options: OptionsType;
  children?: ReactNode;
}

export const Select: React.FC<SelectProps> = ({ children, options }) => {
  const [showOptions, setShowOptions] = useState(false);

  function toggleSelectOptions() {
    setShowOptions(!showOptions);
  }

  return (
    <label
      htmlFor="car-brand"
      className="p-2 rounded-md w-1/5 space-y-2 relative"
    >
      <h4 className="text-sm">{options?.label}</h4>{" "}
      <p
        className={`cursor-pointer flex items-center justify-between ${
          showOptions ? "bg-slate-400" : "bg-slate-300"
        } px-2.5 py-3 rounded-md`}
        onClick={() => toggleSelectOptions()}
      >
       <h4 className="text-sm">{options?.defaultValue}</h4>{" "} 
        <i className={`fa-solid transition-all delay-200 fa-caret-up ${showOptions ? 'rotate-down' : 'rotate-right'}`}></i>
      </p>
      {showOptions && (
        <div className="bg-slate-300 rounded-md leading-loose absolute w-full">
          {children}
        </div>
      )}
    </label>
  );
};

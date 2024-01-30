interface OptionsTypes {
    label?: string | number;
    value?: string | number;
    onChange?: (value: string | number) => void; // Adjusted type for onChange
  }
  
  interface SelectOptionProps {
    options: OptionsTypes;
  }
  
  export const SelectOption: React.FC<SelectOptionProps> = ({ options }) => {
    const handleClick = () => {
      if (options.onChange) {
        options.onChange(options.value || ''); // Added fallback for undefined value
      }
    };
  
    return (
      <div
        className="rounded-md cursor-pointer px-2.5 hover:bg-slate-200 w-full"
        onClick={handleClick}
      >
        {options.label}
      </div>
    );
  };
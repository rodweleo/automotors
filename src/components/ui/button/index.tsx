interface buttonTypes{
    label?: string;
    onClick?: () => void;
    leadingIcon?: string;
    className?: string
}

interface buttonProps{
    options: buttonTypes
}

export const Button: React.FC<buttonProps> = ({options}) => {
    return <button className={options?.className} onClick={() => options?.onClick}> <i className={options?.leadingIcon}></i> {options?.label}</button>
}
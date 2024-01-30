export const Select = ({label, children}) => {
    return <label htmlFor="car-brand" className="border border-slate-400 p-2 rounded-md w-1/5">
    <h4 className="text-sm">{label}</h4>
    <select name="" id="car-brand" className="w-full">
      {children}
    </select>
  </label>
}
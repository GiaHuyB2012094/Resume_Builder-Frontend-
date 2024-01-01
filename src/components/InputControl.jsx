import { forwardRef } from "react"

const InputControl = forwardRef(({type, placeholder, styles, label, register, name, error, value, onChange, ...props}, ref) => {
  return (
    <div className="flex flex-col mt-2 w-full mx-2">
      <p className="text-gray-600 text-sm mb-1 font-medium">{label}</p>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        ref={ref}
        value={value}
        onChange={onChange}
        className={`rounded border border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base px-4 py-2 ${styles}`}
        register={register}
        aria-invalid={error ? "true" : "false"}
        {...props}
        />
        {error && <span className="text-xs text-red-500 mt-0.5">{error}</span>}
    </div>
  )
});
export default InputControl

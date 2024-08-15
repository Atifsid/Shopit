const Input = ({
  value,
  label,
  errorText,
  errorTextVisible,
  type,
  placeholder,
  name,
  id,
  setValue,
  inputClassName,
  containerClassName,
}: {
  value: any;
  setValue: any;
  label: string;
  placeholder?: string;
  errorText?: string;
  errorTextVisible?: boolean;
  type: any;
  name?: any;
  id?: any;
  inputClassName?: any;
  containerClassName?: any;
}) => {
  return (
    <div
      className={`bg-white px-3 pt-3 ${
        errorTextVisible ? "pb-6 max-sm:pb-11" : "pb-3"
      } ${containerClassName} `}
    >
      <div className="relative bg-inherit">
        <input
          type={type}
          id={id}
          name={name}
          className={`peer bg-transparent h-8 ${inputClassName} w-full rounded-sm text-gray-800 placeholder-transparent ring-2 px-2 ring-gray-040 focus:ring-primary focus:outline-none`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <label
          htmlFor={name}
          className="absolute cursor-text left-0 -top-3 text-sm text-sky-600 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
        >
          {label}
        </label>
        {errorTextVisible && (
          <div
            className="absolute w-full my-[5px] text-sm text-error"
            data-twe-input-helper-ref
          >
            {errorText}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;

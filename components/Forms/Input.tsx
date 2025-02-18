import { Control, Controller } from "react-hook-form";

type FormInputProps = {
  id: string;
  label: string;
  placeholder: string;
  control: Control<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  required?: boolean;
};

export const FormInput = ({
  id,
  label,
  placeholder,
  control,
  required,
}: FormInputProps) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <Controller
        name={id}
        control={control}
        render={({ field }) => (
          <input
            type="text"
            id={id}
            {...field}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={placeholder}
            required={required}
          />
        )}
      />
    </>
  );
};

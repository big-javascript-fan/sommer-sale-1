import { FieldValues, UseFormRegister } from "react-hook-form";

interface FormInputProps {
  name: string;
  register: UseFormRegister<FieldValues>;
}

const FormCheckboxInput = (props: FormInputProps) => {
  return (
    <input
      className="border-amber-500 border-2 border-solid mb-10"
      type="checkbox"
      {...props.register(props.name)}
    />
  );
};
export default FormCheckboxInput;

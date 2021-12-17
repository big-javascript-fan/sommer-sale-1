import { FieldValues, UseFormRegister } from "react-hook-form";

interface FormInputProps {
  default: number;
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<FieldValues>;
}

const FormInput = (props: FormInputProps) => {
  return (
    <input
      className="border-amber-500 border-2 border-solid mb-10"
      defaultValue={props.default}
      placeholder={props.placeholder}
      type={props.type}
      {...props.register(props.name)}
    />
  );
};
export default FormInput;

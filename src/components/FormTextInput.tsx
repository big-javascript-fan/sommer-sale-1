import {FieldValues, UseFormRegister} from 'react-hook-form';

interface FormInputProperties {
  default: any;
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<FieldValues>;
}

const FormTextInput = (properties: FormInputProperties) => {
  return (
    <input
      className="border-amber-500 border-2 border-solid mb-10"
      defaultValue={properties.default}
      placeholder={properties.placeholder}
      type={properties.type}
      {...properties.register(properties.name)}
    />
  );
};
export default FormTextInput;

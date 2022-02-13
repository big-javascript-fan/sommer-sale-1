import {FieldValues, UseFormRegister} from 'react-hook-form';

interface FormInputProperties {
  default: any;
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  className?: string;
}

const FormTextInput = (properties: FormInputProperties) => {
  return (
    <input
      className="form_input"
      defaultValue={properties.default}
      placeholder={properties.placeholder}
      type={properties.type}
      {...properties.register(properties.name)}
    />
  );
};
export default FormTextInput;

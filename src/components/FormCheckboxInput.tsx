import {FieldValues, UseFormRegister} from 'react-hook-form';

interface FormInputProperties {
  name: string;
  register: UseFormRegister<FieldValues>;
}

const FormCheckboxInput = (properties: FormInputProperties) => {
  return (
    <input
      className="border-amber-500 border-2 border-solid mb-10"
      type="checkbox"
      {...properties.register(properties.name)}
    />
  );
};
export default FormCheckboxInput;

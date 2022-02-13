import {FieldValues, UseFormRegister} from 'react-hook-form';

interface FormInputProperties {
  name: string;
  register: UseFormRegister<FieldValues>;
}

const FormCheckboxInput = (properties: FormInputProperties) => {
  return (
    <input
      className="mb-10 border-2 border-solid border-amber-500"
      type="checkbox"
      {...properties.register(properties.name)}
    />
  );
};
export default FormCheckboxInput;

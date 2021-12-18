interface FormLabelProps {
  label: string;
}

const FormLabel = (props: FormLabelProps) => {
  return <label>{props.label}</label>;
};

export default FormLabel;

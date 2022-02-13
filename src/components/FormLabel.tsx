interface FormLabelProperties {
  label: string;
}

const FormLabel = (properties: FormLabelProperties) => {
  return <label>{properties.label}</label>;
};

export default FormLabel;

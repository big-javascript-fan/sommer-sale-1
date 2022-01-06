interface SubmitButtonProperties {
  text: string;
  className?: string;
  disabled?: boolean;
}

const SubmitButton = (properties: SubmitButtonProperties) => {
  return (
    <input
      className={`submit_btn ${
        properties.disabled == true ?
          'submit_btn_disabled' :
          'submit_btn_active'
      } ${properties.className}`}
      type="submit"
      disabled={properties.disabled}
      value={properties.text}
    />
  );
};

export default SubmitButton;

interface SubmitButtonProperties {
  text: string;
}

const SubmitButton = (properties: SubmitButtonProperties) => {
  return (
    <input
      className="bg-slate-400 rounded text-white w-1/4 border p-2"
      type="submit"
      value="Submit"
    />
  );
};

export default SubmitButton;

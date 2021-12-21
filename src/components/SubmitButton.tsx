interface SubmitButtonProperties {
  text: string;
}

const SubmitButton = (properties: SubmitButtonProperties) => {
  return (
    <input
      className="w-1/4 p-2 text-white border rounded bg-slate-400"
      type="submit"
      value={properties.text}
    />
  );
};

export default SubmitButton;

interface SubmitButtonProps {
  text: string;
}

const SubmitButton = (props: SubmitButtonProps) => {
  return (
    <input
      className="bg-slate-400 rounded text-white w-1/4 border p-2"
      type="submit"
      value="Submit"
    />
  );
};

export default SubmitButton;

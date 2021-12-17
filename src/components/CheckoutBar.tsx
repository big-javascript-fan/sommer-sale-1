import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SubmitButton from "./SubmitButton";
import FormInput from "./FormInput";
const CheckoutSchema = yup.object().shape({
  shares: yup.number().required(),
});

const CheckoutBar = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(CheckoutSchema) });
  const onSubmit = (data: any) => console.log(data);
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        default={100}
        placeholder="Shares"
        name="shares"
        type="number"
        register={register}
      />
      {/* errors will return when field validation fails  */}
      {errors.shares && <span>This field is required</span>}

      <SubmitButton text="Submit" />
    </form>
  );
};
export default CheckoutBar;

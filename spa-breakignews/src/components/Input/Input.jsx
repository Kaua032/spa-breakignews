import { InputSpace } from "./InputStyled";


export function Input({ type, register, placeholder, name}) {
  return (
    <InputSpace type={type} placeholder={placeholder}  {...register(name)}/>
  );
}

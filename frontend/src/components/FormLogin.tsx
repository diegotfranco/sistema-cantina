import { zodResolver } from '@hookform/resolvers/zod';
import { FieldErrors, useForm } from 'react-hook-form';
import TextInput from './TextInput';
import MaskTypes from 'types/mask.types';
import { BaseSyntheticEvent, useState } from 'react';
import { LoginDataProps, loginFormData } from 'types/loginFormData.types';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from '@tanstack/react-router';

const onSubmit = (
  data: LoginDataProps,
  e?: BaseSyntheticEvent<FieldErrors<LoginDataProps>>
) => {
  console.log('submit', data);
  console.log(e);
};

// const onError = (
//   errors: FieldErrors<LoginDataProps>,
//   e?: BaseSyntheticEvent<FieldErrors<LoginDataProps>>
// ) => {
//   e?.preventDefault();
//   console.log('errors', errors);
// };

const FormLogin = () => {
  const [visibility, setVisibility] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
    // reset
  } = useForm<LoginDataProps>({
    mode: 'onSubmit',
    resolver: zodResolver(loginFormData),
    defaultValues: {
      phone: '',
      password: ''
    }
  });

  console.log('errors', errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)} //, onError)}
      className="flex flex-col items-center gap-4 border border-main pt-8 pb-32 px-6 rounded-md bg-white"
    >
      <div className="w-full flex flex-col">
        <label className="font-medium text-dark" htmlFor="phone">
          Celular
        </label>
        <TextInput.Root className="flex items-center h-10 border border-gray-200 hover:border-gray-400 rounded-md px-2">
          <TextInput.BaseMasked
            {...register('phone')}
            className="grow rounded-md outline-0"
            id="phone"
            type="text"
            mask={MaskTypes.phone}
            unmask={true}
          />
        </TextInput.Root>
        {errors.phone && (
          <p className="text-red-500 font-open-sans text-sm">{errors.phone.message}</p>
        )}
      </div>
      <div className="w-full flex flex-col">
        <label className="font-medium text-dark" htmlFor="password">
          Senha
        </label>
        <TextInput.Root className="flex items-center h-10 border border-gray-200 hover:border-gray-400 rounded-md px-2">
          <TextInput.Base
            className="grow rounded-md outline-0"
            id="password"
            type={visibility ? 'text' : 'password'}
            {...register('password')}
          />
          <TextInput.Content
            className="w-7 h-7 rounded-full flex items-center justify-center bg-inherit text-gray-400 hover:bg-gray-100 "
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              setVisibility((prev) => !prev);
            }}
            icon={visibility ? AiOutlineEyeInvisible : AiOutlineEye}
          />
        </TextInput.Root>
        {errors.password && (
          <p className="text-red-500 font-open-sans text-sm">{errors.password.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="flex items-center justify-center text-white rounded bg-main h-10 w-72 text-xl "
      >
        Entrar
      </button>
      <Link to="/signup" className="text-center underline">
        Ainda não tem cadastro?
      </Link>
    </form>
  );
};

export default FormLogin;

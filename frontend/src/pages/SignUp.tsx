import Banner from 'components/Banner';
import { useState } from 'react';
import { TextInput } from 'components/TextInput';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import MaskTypes from 'types/mask.types';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col h-lvh">
      <Banner />
      <div className="bg-slate-200 grow flex justify-center items-center">
        <div className="flex flex-col gap-4 border border-main pt-8 pb-32 px-6 rounded-md bg-white">
          <div className="flex flex-col">
            <label className="font-medium text-dark" htmlFor="name">
              Nome
            </label>
            <TextInput.Root className="flex items-center h-10 border border-gray-200 hover:border-gray-400 rounded-md px-2">
              <TextInput.Base
                className="grow rounded-md outline-0"
                id="name"
                type="text"
              />
            </TextInput.Root>
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-dark" htmlFor="phone">
              Celular
            </label>
            <TextInput.Root className="flex items-center h-10 border border-gray-200 hover:border-gray-400 rounded-md px-2">
              <TextInput.BaseMasked
                className="grow rounded-md outline-0"
                id="phone"
                type="text"
                mask={MaskTypes.phone}
                unmask={true}
                onAccept={(value) => console.log(value)}
              />
            </TextInput.Root>
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-dark" htmlFor="password">
              Senha
            </label>
            <TextInput.Root className="flex items-center h-10 border border-gray-200 hover:border-gray-400 rounded-md px-2">
              <TextInput.Base
                className="grow rounded-md outline-0"
                id="password"
                type={showPassword ? 'text' : 'password'}
              />
              <TextInput.Content
                className="w-7 h-7 rounded-full flex items-center justify-center bg-inherit text-gray-400 hover:bg-gray-100 "
                onClick={() => setShowPassword((prev) => !prev)}
                onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) =>
                  event.preventDefault()
                }
                icon={showPassword ? VisibilityOff : Visibility}
              />
            </TextInput.Root>
          </div>
          <div className="flex flex-col">
            <label className="font-medium text-dark" htmlFor="password">
              Confirmar Senha
            </label>
            <TextInput.Root className="flex items-center h-10 border border-gray-200 hover:border-gray-400 rounded-md px-2">
              <TextInput.Base
                className="grow rounded-md outline-0"
                id="password"
                type={showPassword ? 'text' : 'password'}
              />
              <TextInput.Content
                className="w-7 h-7 rounded-full flex items-center justify-center bg-inherit text-gray-400 hover:bg-gray-100 "
                onClick={() => setShowPassword((prev) => !prev)}
                onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) =>
                  event.preventDefault()
                }
                icon={showPassword ? VisibilityOff : Visibility}
              />
            </TextInput.Root>
          </div>
          <button className="flex items-center justify-center text-white rounded bg-main h-10 w-72 text-xl ">
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

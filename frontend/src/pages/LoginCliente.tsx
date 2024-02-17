import Banner from "../components/Banner";
import Box from '@mui/material/Box';
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { InputLabel, OutlinedInput, InputAdornment } from "@mui/material";
import { Link } from "@tanstack/react-router";

const LoginCliente = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col h-lvh">
      <Banner />
      <div className="bg-slate-200 grow flex justify-center items-center">
        <Box
          className="flex flex-col gap-4 border border-main pt-8 pb-32 px-6 rounded-md bg-white"
        >
          <div className="flex flex-col">
            <InputLabel className="font-medium text-dark" htmlFor="celular">Celular</InputLabel>
            <OutlinedInput className="" id="celular" type='text' />
          </div>
          <div className="flex flex-col">
            <InputLabel className="font-medium text-dark" htmlFor="password">Senha</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((show) => !show)}
                    onMouseDown={(event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <Link
          to="#"
          className="text-white rounded bg-main py-1 w-72 text-xl text-center"
        >
          Entrar
        </Link>
        <Link
          to="#"
          className="text-center underline"
        >
          Ainda não tem cadastro?
        </Link>
        </Box>
      </div>
    </div>
  );
}

export default LoginCliente;
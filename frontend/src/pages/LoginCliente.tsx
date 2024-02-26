import Banner from 'components/Banner';
import FormLogin from 'components/FormLogin';

const LoginCliente = () => {
  console.log('rendering LoginCliente...');

  return (
    <div className="flex flex-col h-lvh">
      <Banner />
      <div className="bg-slate-200 grow flex justify-center items-center">
        <FormLogin />
      </div>
    </div>
  );
};

export default LoginCliente;

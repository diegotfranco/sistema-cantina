import { Link } from "@tanstack/react-router";
import BackgroundDimmed from "../components/BackgroundDimmed";
import SocialButton from "../components/SocialButton";
import getImageURL from "../utils/image-util";

const LandingPage = () => {
  return (
    <>
      <BackgroundDimmed name="main" />
      <div className="flex justify-center mt-16 mb-24">
        <img src={getImageURL('logo')} alt="log"/>
      </div>
      <div className="flex flex-col gap-4 items-center mt-8">
        <Link
          to="/login"
          className="text-white rounded bg-main py-1 w-72 text-xl text-center"
        >
          Entrar
        </Link>
        <Link
          to="/cardapio"
          className="flex items-center justify-center gap-1 text-white rounded border-2 border-main bg-transparent py-1 w-72 text-xl"
        >
          <img src={getImageURL('menu')} />
          {'| Cardapio'}
        </Link>
      </div>
      <div className="flex justify-center gap-2 mt-8">
        <SocialButton name="whatsapp"/>
        <SocialButton name="instagram"/>
        <SocialButton name="facebook"/>
      </div>
    </>
  );
}

export default LandingPage;
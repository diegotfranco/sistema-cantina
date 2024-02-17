import { Link } from '@tanstack/react-router';
import BackgroundDimmed from 'components/BackgroundDimmed';
import Button from 'components/Button';
import getImageURL from '../utils/image-util';
import socialMediaEnum from 'modules/enums/socialMedia.enum';

const LandingPage = () => {
  return (
    <>
      <BackgroundDimmed name="main" />
      <div className="flex justify-center mt-16 mb-24">
        <img src={getImageURL('logo')} alt="log" />
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
        <Button className="rounded-full bg-main text-white w-8 h-8 flex justify-center items-center">
          <a href={socialMediaEnum.whatsapp}>
            <img src={getImageURL('whatsapp')} alt="whatsapp" className="h-[1.75rem]" />
          </a>
        </Button>
        <Button className="rounded-full bg-main text-white w-8 h-8 flex justify-center items-center">
          <a href={socialMediaEnum.instagram}>
            <img src={getImageURL('instagram')} alt="instagram" className="h-6" />
          </a>
        </Button>
        <Button className="rounded-full bg-main text-white w-8 h-8 flex justify-center items-center">
          <a href={socialMediaEnum.facebook}>
            <img src={getImageURL('facebook')} alt="facebook" className="h-6" />
          </a>
        </Button>
      </div>
    </>
  );
};

export default LandingPage;

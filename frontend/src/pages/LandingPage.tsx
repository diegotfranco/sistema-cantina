import { Link } from '@tanstack/react-router';
import BackgroundImage from 'components/BackgroundImage';
import Button from 'components/Button';
import getImageURL from 'utils/image';
import { RiWhatsappLine, RiFacebookFill, RiInstagramLine } from 'react-icons/ri';
import socialMediaEnum from 'modules/enums/socialMedia.enum';

const LandingPage = () => {
  console.log('rendering Landing Page...');
  return (
    <>
      <BackgroundImage />
      <div className="flex justify-center pt-16 mb-24">
        <img src={getImageURL('logo.svg')} alt="log" />
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
          <img src={getImageURL('menu.svg')} />
          {'| Cardapio'}
        </Link>
      </div>
      <div className="flex justify-center gap-2 mt-8">
        <Button
          asChild={true}
          className="rounded-full bg-main text-white w-8 h-8 flex justify-center items-center"
        >
          <a href={socialMediaEnum.whatsapp}>
            {/* <img
              src={getImageURL('whatsapp.svg')}
              alt="whatsapp"
              className="h-[1.75rem]"
            /> */}
            <RiWhatsappLine className="text-2xl rounded-full" />
          </a>
        </Button>
        <Button
          asChild={true}
          className="rounded-full bg-main text-white w-8 h-8 flex justify-center items-center"
        >
          <a href={socialMediaEnum.instagram}>
            {/* <img src={getImageURL('instagram.svg')} alt="instagram" className="h-6" /> */}
            <RiInstagramLine className="text-2xl" />
          </a>
        </Button>
        <Button
          asChild={true}
          className="rounded-full bg-main text-white w-8 h-8 flex justify-center items-center"
        >
          <a href={socialMediaEnum.facebook}>
            {/* <img src={getImageURL('facebook.svg')} alt="facebook" className="h-6" /> */}
            <RiFacebookFill className="text-2xl" />
          </a>
        </Button>
      </div>
    </>
  );
};

export default LandingPage;

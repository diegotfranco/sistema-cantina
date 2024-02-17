import getImageURL from '../utils/image-util';

const Banner = () => {
  return (
    <div className='flex h-[25lvh] items-center justify-center relative'>
      <img src={getImageURL('logo')} alt='logo' />
      <div className='absolute top-0 left-0 right-0 bg-secondary-img h-full bg-cover bg-no-repeat filter brightness-50 -z-10'>
      </div>
    </div>
  );
}

export default Banner;
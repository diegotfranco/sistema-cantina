import getImageURL from 'utils/image';

const Banner = () => {
  console.log('rendering Banner...');
  return (
    <div className="flex h-[25lvh] items-center justify-center relative">
      <img src={getImageURL('logo.svg')} alt="logo" />
      <div className="absolute top-0 left-0 right-0 bg-img-secondary h-full bg-cover bg-no-repeat filter brightness-50 -z-10"></div>
    </div>
  );
};

export default Banner;

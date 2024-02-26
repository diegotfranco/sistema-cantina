const BackgroundImage = () => {
  console.log('rendering BackgroundImage...');
  return (
    <div
      className={`absolute top-0 right-0 left-0 bg-img-primary bg-cover bg-no-repeat h-svh filter brightness-50 -scale-x-100 -z-10`}
    ></div>
  );
};

export default BackgroundImage;

const BackgroundDimmed = ({ name }: { name: string }) => {

  const imgVariants = {
    main: 'bg-main-img',
    secondary: 'bg-secondary-img',
  }   

  return (
    <div className={`absolute top-0 right-0 left-0 ${imgVariants[name as keyof typeof imgVariants]} bg-cover bg-no-repeat h-svh filter brightness-50 -scale-x-100 -z-10`}></div>
  );
}

export default BackgroundDimmed;
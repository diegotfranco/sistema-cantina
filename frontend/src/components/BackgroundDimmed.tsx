import backgroundVariantsEnum from 'modules/enums/backgroundVariants.enum';

interface BackgroundDimmedProps {
  name: 'main' | 'secondary';
}

const BackgroundDimmed = ({ name }: BackgroundDimmedProps) => {
  return (
    <div
      className={`absolute top-0 right-0 left-0 ${backgroundVariantsEnum[name]} bg-cover bg-no-repeat h-svh filter brightness-50 -scale-x-100 -z-10`}
    ></div>
  );
};

export default BackgroundDimmed;

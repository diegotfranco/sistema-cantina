import { IMaskInput, IMaskInputProps } from 'react-imask';

type TextInputBaseProps = IMaskInputProps<HTMLInputElement> & {
  className: string;
};

const TextInputBase = (props: TextInputBaseProps) => {
  console.log(props);

  return <IMaskInput {...props} />;
};

export default TextInputBase;

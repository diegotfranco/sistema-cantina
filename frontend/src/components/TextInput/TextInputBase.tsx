import { InputHTMLAttributes, ReactNode } from 'react';

interface TextInputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: string;
  children?: ReactNode;
}
const TextInputBase = (props: TextInputBaseProps) => {
  const { mask, ...rest } = props;

  return (
      <input {...rest} />
  );
};

export default TextInputBase;

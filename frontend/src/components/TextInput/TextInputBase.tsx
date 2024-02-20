import { InputHTMLAttributes } from 'react';

interface TextInputBaseProps extends InputHTMLAttributes<HTMLInputElement> {}
const TextInputBase = (props: TextInputBaseProps) => {
  console.log(props);
  return <input {...props} />;
};

export default TextInputBase;

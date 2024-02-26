import { InputHTMLAttributes, forwardRef } from 'react';

interface TextInputBaseProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputBase = forwardRef<HTMLInputElement, TextInputBaseProps>((props, ref) => {
  console.log('rendering TextInput...');
  return <input {...props} ref={ref} />;
});

export default TextInputBase;

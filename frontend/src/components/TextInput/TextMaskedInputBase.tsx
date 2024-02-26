import { forwardRef } from 'react';
import { IMaskInput, IMaskInputProps } from 'react-imask';

type TextInputBaseProps = IMaskInputProps<HTMLInputElement> & {
  className: string;
};

const TextInputBase = forwardRef<HTMLInputElement, TextInputBaseProps>((props, ref) => {
  console.log('rendering TextMaskedInputBase...');
  return <IMaskInput {...props} inputRef={ref} />;
});

export default TextInputBase;

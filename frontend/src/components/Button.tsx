import { ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = ({ asChild, ...rest }: ButtonProps) => {
  console.log('rendering Button...');
  const Component = asChild ? Slot : 'button';

  return <Component {...rest} />;
};

export default Button;

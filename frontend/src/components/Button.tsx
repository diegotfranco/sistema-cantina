import { ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = (props: ButtonProps) => {
  const Component = props.asChild ? Slot : 'button';

  return <Component {...props} />;
};

export default Button;

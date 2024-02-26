import { HTMLAttributes, ReactNode } from 'react';

interface TextInputRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const TextInputRoot = ({ children, ...rest }: TextInputRootProps) => {
  console.log('rendering TextInputRoot...');
  return <div {...rest}>{children}</div>;
};

export default TextInputRoot;

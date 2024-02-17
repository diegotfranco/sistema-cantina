import { HTMLAttributes, ReactNode } from 'react';

interface TextInputRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const TextInputRoot = ({ children, ...rest }: TextInputRootProps) => {
  return <div {...rest}>{children}</div>;
};

export default TextInputRoot;

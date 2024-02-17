import { ElementType } from 'react';

interface TextInputPreProps {
  element?: ElementType;
}

const TextInputPre = ({ element: Element }: TextInputPreProps) => {
  return Element && <Element />;
};

export default TextInputPre;

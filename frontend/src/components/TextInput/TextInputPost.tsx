import { ElementType } from 'react';

interface TextInputPostProps {
  element?: ElementType;
}

const TextInputPost = ({ element: Element }: TextInputPostProps) => {
  return Element && <Element />;
};

export default TextInputPost;

import { ButtonHTMLAttributes, ElementType } from 'react';

interface TextInputContentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}

const TextInputContent = ({ icon: Icon, ...rest }: TextInputContentProps) => {
  console.log('rendering TextInputContent...');
  return (
    <button {...rest}>
      <Icon className="w-5 h-5 rounded-full text-inherit" />
    </button>
  );
};

export default TextInputContent;

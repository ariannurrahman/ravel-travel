import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant: 'primary' | 'secondary';
  type: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  dataCy: string;
}

export const RavelButton = ({ children, type, variant, className, dataCy }: ButtonProps) => {
  const variantClass = variant === 'primary' ? 'bg-[#0CC03E] rounded rounded-md' : '';

  return (
    <button type={type} className={`${variantClass} ${className}`} data-cy={dataCy}>
      {children}
    </button>
  );
};

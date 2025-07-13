import {
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from 'react';
import clsx from 'clsx';

type InputVariant = 'underline' | 'outline';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  required?: boolean;
  label?: string;
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { variant = 'outline', required, wrapperProps, label, ...attributes },
    ref,
  ) => {
    const inputElement = (
      <input
        {...attributes}
        className={clsx(
          'outline-0 block border-gray-500 w-full',
          {
            'border rounded px-3 py-1': variant === 'outline',
            'border-b py-0.5': variant === 'underline',
          },
          attributes.className,
        )}
        ref={ref}
      />
    );

    const addLabel = (children: ReactNode) => (
      <div className={'flex flex-col gap-1'}>
        <div className={'flex gap-1 items-center'}>
          <span className={'font-medium'}>{label}</span>
          {required && (
            <span className={'text-red-500 relative top-0.5'}>*</span>
          )}
        </div>
        {children}
      </div>
    );

    return (
      <div {...wrapperProps}>
        {label ? addLabel(inputElement) : inputElement}
      </div>
    );
  },
);

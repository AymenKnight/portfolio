import { cn } from '@/lib/utils';

type DefaultButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
interface TextButtonProps {
  className?: string;
  text?: string;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}
export default function TextButton({
  text,
  className,
  children,
  type = 'button',
  disabled = false,
  ...otherProps
}: TextButtonProps & DefaultButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'w-fit h-fit px-4 py-2 text-white rounded-full flex flex-row items-center justify-center gap-2 outline-none transition-all cursor-pointer',
        className,
        disabled && 'cursor-not-allowed opacity-40',
      )}
      {...otherProps}
    >
      {text}
      {children}
    </button>
  );
}

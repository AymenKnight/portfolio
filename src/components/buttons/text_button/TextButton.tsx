import { cn } from '@/lib/utils';

type DefaultButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
interface TextButtonProps {
  className?: string;
  text?: string;
  children?: React.ReactNode;
}
export default function TextButton({
  text,
  className,
  children,
  ...otherProps
}: TextButtonProps & DefaultButtonProps) {
  return (
    <button
      className={cn(
        'w-fit h-fit px-4 py-2 text-white rounded-full flex flex-row items-center justify-center gap-2',
        className,
      )}
      {...otherProps}
    >
      {text}
      {children}
    </button>
  );
}

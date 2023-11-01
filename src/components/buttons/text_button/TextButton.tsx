import clsx from 'clsx';

interface TextButtonProps {
  backgroundColor?: string;
}
export default function TextButton({
  backgroundColor = 'bg-white',
}: TextButtonProps) {
  return (
    <div className={clsx('w-10 h-10 rounded-full', backgroundColor)}></div>
  );
}

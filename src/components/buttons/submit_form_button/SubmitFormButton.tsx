'use client';

import { FaPaperPlane } from 'react-icons/fa6';
import TextButton from '../text_button';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

interface SubmitFormButtonProps {}
export default function SubmitFormButton({}: SubmitFormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <TextButton
      type="submit"
      text={pending ? undefined : 'Send'}
      disabled={pending}
      className=" text-white px-3 py-2 rounded-lg w-full
  bg-gray-900 hover:bg-gray-950 hover:scale-105 focus:scale-105 active:scale-100  
   dark:bg-white dark:bg-opacity-30  dark:hover:bg-opacity-40
  disabled:scale-100  disabled:bg-opacity-60
  "
    >
      {pending ? (
        <div className="w-8 h-8 rounded-full animate-spin border-b-2 border-white" />
      ) : (
        <FaPaperPlane className="w-5 h-4" />
      )}
    </TextButton>
  );
}

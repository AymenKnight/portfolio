'use client';

import TextButton from '../buttons/text_button';
import { BsArrowRight } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
interface ControlsSectionProps {}
export default function ControlsSection({}: ControlsSectionProps) {
  const router = useRouter();
  return (
    <div className="controls-section">
      <TextButton
        className="bg-red-600"
        text="Contact me here"
        onClick={() => router.push('#contact')}
      >
        <BsArrowRight />
      </TextButton>
    </div>
  );
}

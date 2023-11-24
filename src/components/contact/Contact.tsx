'use client';

import { useSectionInView } from '@/lib/hooks';
import SectionHeading from '../section_heading';
import { motion } from 'framer-motion';
import { sendEmail } from '@/services/server_actions/actions';
import SubmitFormButton from '../buttons/submit_form_button';
import toast from 'react-hot-toast';

interface ContactProps {}
export default function Contact({}: ContactProps) {
  const { ref } = useSectionInView({
    sectionName: '#contact',
    threshold: 1,
  });
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="flex flex-col items-center justify-center gap-5 w-full leading-8 scroll-mt-28 pt-5 pb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p>
        you can reach me directly at{' '}
        <a
          href="mailto:daouadji505@gmail.com"
          className="text-blue-500 text-base
        underline "
        >
          daouadji505@gmail.com
        </a>{' '}
        or by using the form below.
      </p>
      <form
        className="flex flex-col gap-3 w-full max-w-[40rem]"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          if (data) {
            toast.success('Message sent successfully');
          }
        }}
      >
        <input
          type="email"
          name="email"
          required
          maxLength={500}
          placeholder="Insert your email"
          className="border border-black/10 p-3 rounded-lg"
        />
        <textarea
          name="message"
          required
          maxLength={500}
          placeholder="Insert your message"
          className="border border-black/10 p-3 rounded-lg"
        />

        <SubmitFormButton />
      </form>
    </motion.section>
  );
}

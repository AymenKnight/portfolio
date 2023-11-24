'use server';

import { Resend } from 'resend';

export const sendEmail = async (formData: FormData) => {
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',

    to: 'daouadji505@gmail.com',
    subject: `New Message From ${email}`,
    text: `${message}`,
    reply_to: email,
  });
  if (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    } else if (error && typeof error === 'object' && 'message' in error) {
      return {
        error: error.message as string,
      };
    }
    return {
      error: 'Something went wrong',
    };
  }

  return {
    data,
  };
};

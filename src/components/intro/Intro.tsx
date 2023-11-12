import CircleAvatar from '../circle_avatar';
import UserDescription from '../user_description';

interface IntroProps {}
export default function Intro({}: IntroProps) {
  return (
    <section
      id="home"
      className="flex  flex-col items-center justify-center  gap-5 max-w-[54rem]  px-6 scroll-mt-28 "
    >
      <CircleAvatar />
      <UserDescription />
    </section>
  );
}

import CircleAvatar from '../circle_avatar';

interface IntroProps {}
export default function Intro({}: IntroProps) {
  return (
    <section className="intro">
      <CircleAvatar />
    </section>
  );
}

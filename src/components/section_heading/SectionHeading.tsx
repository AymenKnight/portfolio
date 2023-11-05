interface SectionHeadingProps {
  children: React.ReactNode;
}
export default function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="capitalize font-medium text-3xl ">{children}</h2>;
}

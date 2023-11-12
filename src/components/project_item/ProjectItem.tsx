import Image, { StaticImageData } from 'next/image';

interface ProjectItemProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
}
export default function ProjectItem({
  title,
  description,
  tags,
  imageUrl,
}: ProjectItemProps) {
  return (
    <section className="group  flex flex-col sm:flex-row sm:even:flex-row-reverse justify-between  bg-gray-300 pt-8 rounded-sm overflow-hidden border border-black/5 ">
      <div className="flex flex-col gap-3 pl-2 sm:pl-8 sm:pr-2">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-lg font-medium text-gray-700 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-1 pb-5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        quality={100}
        className="w-full max-h-[20rem] sm:max-h-none  sm:w-[50%] group-odd:rounded-tl-2xl shadow-2xl   object-fill group-even:rounded-tr-2xl   "
      />
    </section>
  );
}

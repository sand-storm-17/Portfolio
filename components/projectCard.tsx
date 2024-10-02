import Image from "next/image";
import Link from "next/link";

const ProjectCard = (props: {
  name: string,
  summary: string,
  image:string,
  link:string
}) => {
  return (
    <Link href={props.link} className="flex flex-col rounded-lg w-auto border-gray-700 border bg-white px-4 py-2">
      <div className="flex rounded-lg bg-primary items-center justify-center">
        <Image
          src={props.image}
          alt=""
          width={400}
          height={40}
          className="w-full rounded-lg"
        />
      </div>
      <div className="flex justify-between w-full text-sm font-mono">
        <div className="flex flex-col p-2">
          <div className="font-mono text-lg">{props.name}</div>
          <div >{props.summary}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

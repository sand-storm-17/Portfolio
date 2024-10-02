import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const AchievementCard = (props: {
  name: string;
  issuer: string;
  date: string;
  logo: string;
  link: string;
}) => {
  return (
    <div className="flex flex-row rounded-full w-auto border-gray-700 border bg-white px-4 py-2">
      <div className="flex rounded-full bg-primary items-center justify-start mr-4">
        <Image
          src={props.logo}
          alt=""
          width={15}
          height={15}
          className="rounded-full object-contain"
        />
      </div>
      <div className="flex justify-between w-full text-sm font-mono">
        <div className="flex flex-col">
          <div>{props.name}</div>
          <div className="font-bold">{props.issuer}</div>
        </div>
        <div className="flex gap-2 items-center justify-center text-xs">
          <div>{props.date}</div>
        </div>
        <Link href={props.link} className="flex items-center justify-center">
          <FaExternalLinkAlt />
        </Link>
      </div>
    </div>
  );
};

export default AchievementCard;

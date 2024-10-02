import Image from "next/image";

const SkillCard = (props: {
  title: string;
  description: string;
  logo: string;
}) => {
  return (
    <div className="flex flex-row rounded-lg w-auto border-gray-700 border bg-white px-4 py-2">
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
          <div className="font-bold">{props.title}</div>
          <div className="">{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

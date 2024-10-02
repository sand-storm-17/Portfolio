import Image from "next/image";

const WorkExperienceCard = (props: {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  logo: string;
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
          <div>{props.position}</div>
          <div className="font-bold">{props.company}</div>
        </div>
        <div className="flex gap-2 items-center justify-center text-xs">
            <div>{props.startDate}</div>
            <div>-</div>
            <div>{props.endDate}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;

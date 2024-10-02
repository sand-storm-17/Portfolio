import WorkExperienceCard from "@/components/WorkExCard";
import Image from "next/image";

type workExp = {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  logo: string;
  id: number;
};

const workExperiences: workExp[] = [
  {
    position: "Developer",
    company: "Fastenal",
    startDate: "June 2023",
    endDate: "Present",
    logo: "/favicon.ico",
    id: 1,
  },
  {
    position: "Intern",
    company: "Fastenal",
    startDate: "Jan 2023",
    endDate: "May 2023",
    logo: "/favicon.ico",
    id: 2,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-10 sm:flex-row bg-primary text-black min-h-screen sm:item-center sm:justify-around p-4 mt-4">
      {/* LEFT */}
      <div className="flex flex-col gap-6 sm:w-2/5">
        <Image src="/favicon.ico" alt="" width={80} height={80} />
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">I&apos;m Sandeep</h1>
          <p className="font-mono ">
            Web(React), Mobile(Flutter) and Blockchain Developer based in
            Bangalore, India
          </p>
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex flex-col gap-2 md:w-3/5 lg:w-2/5">
        {/* Tagline and Connect */}
        <div className="flex flex-col gap-5">
          <h1 className="flex w-[80%] font-semibold">
            Passionate creating great experiences for Digital Product
          </h1>
          <div className="flex flex-col gap-4 items-center lg:flex-row">
            <button className="rounded-full border-gray-300 bg-black text-white px-4 py-2 font-serif">
              Talk With Me
            </button>
            <button className="rounded-full border-gray-300 border px-4 py-2 font-serif">
              See my work
            </button>
          </div>
          <hr />
        </div>
        {/* Working Experience */}
        <div className="flex flex-col p-4 gap-2">
          <div className="text-lg">Working Experience</div>
          <div className="flex flex-col p-2 gap-2">
            {workExperiences.map((item) => (
              <WorkExperienceCard
                key={item.id}
                position={item.position}
                company={item.company}
                startDate={item.startDate}
                endDate={item.endDate}
                logo={item.logo}
              />
            ))}
          </div>
          <hr />
        </div>
        {/* Acheivements and Milestones */}
        <div className="flex flex-col p-4 gap-2">
          <div className="text-lg">Acheivements and Milestones</div>
          <div className="flex flex-col p-2 gap-2">
            {workExperiences.map((item) => (
              <WorkExperienceCard
                key={item.id}
                position={item.position}
                company={item.company}
                startDate={item.startDate}
                endDate={item.endDate}
                logo={item.logo}
              />
            ))}
          </div>
          <hr />
        </div>
        {/* About me */}
        <div className="flex flex-col p-4 gap-2">
          <div className="text-lg">What i do</div>
          <div className="flex flex-col p-2 gap-2">
            {workExperiences.map((item) => (
              <WorkExperienceCard
                key={item.id}
                position={item.position}
                company={item.company}
                startDate={item.startDate}
                endDate={item.endDate}
                logo={item.logo}
              />
            ))}
          </div>
          <hr />
        </div>
        {/* Projects */}
        <div className="flex flex-col p-4 gap-2">
          <div className="text-lg">Acheivements and Milestones</div>
          <div className="flex flex-col p-2 gap-2">
            {workExperiences.map((item) => (
              <WorkExperienceCard
                key={item.id}
                position={item.position}
                company={item.company}
                startDate={item.startDate}
                endDate={item.endDate}
                logo={item.logo}
              />
            ))}
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

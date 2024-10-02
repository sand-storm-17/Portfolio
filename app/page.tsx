import AchievementCard from "@/components/achievementCard";
import ProjectCard from "@/components/projectCard";
import SkillCard from "@/components/skillCard";
import WorkExperienceCard from "@/components/WorkExCard";
import Image from "next/image";
import Link from "next/link";

type workExp = {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  logo: string;
  id: number;
};
type achievement = {
  name: string;
  issuer: string;
  date: string;
  logo: string;
  link: string;
  id: number;
};
type project = {
  name: string;
  summary: string;
  image: string;
  link: string;
  id: number;
};
type skill = {
  title: string;
  description: string;
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
const achievements: achievement[] = [
  {
    name: "1100+ problems on leetcode",
    issuer: "Leetcode",
    date: "2024",
    logo: "/leetcode.png",
    link: "https://leetcode.com/u/sandeep8381/",
    id: 1,
  },
  {
    name: "1800+ rating on Codechef",
    issuer: "Codechef",
    date: "2024",
    logo: "",
    link: "https://leetcode.com/u/sandeep8381/",
    id: 2,
  },
];
const projects: project[] = [
  {
    name: "School Management System",
    summary:
      "The system allows secure and efficient management of school operations, with tailored features for each role to ensure seamless user experience.",
    image: "/schoolManagementSystem.png",
    link: "https://school-management-system-sandy.vercel.app/list/teachers",
    id: 1,
  },
  {
    name: "Bet-Your-View",
    summary:
      "Youtube Opinions market dapp running on Solona blockchain which lets youtubers create their own coin and let people buy the coins and support the creators. Users can trade and the value of a coin fluctuates based on supply and demand.",
    image: "/betyourview.png",
    link: "https://view-app-next.vercel.app/",
    id: 2,
  },
];
const skills: skill[] = [
  {
    title: "Full Stack Development",
    description: "Creating fully functional scalable websites",
    logo: "/favicon.ico",
    id: 1,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-10 sm:flex-row bg-primary text-black min-h-screen sm:item-center sm:justify-around p-4 mt-4">
      {/* LEFT */}
      <div className="flex flex-col gap-6 sm:w-2/5" id="aboutme">
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
            <Link href="#myworks">
              <button className="rounded-full border-gray-300 border px-4 py-2 font-serif">
                See my work
              </button>
            </Link>
          </div>
          <hr />
        </div>
        {/* Working Experience */}
        <div className="flex flex-col p-4 gap-2" id="experience">
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
            {achievements.map((item) => (
              <AchievementCard
                key={item.id}
                name={item.name}
                issuer={item.issuer}
                date={item.date}
                link={item.link}
                logo={item.logo}
              />
            ))}
          </div>
          <hr />
        </div>
        {/* About me */}
        <div className="flex flex-col p-4 gap-2">
          <div className="text-lg" id="whatido">
            What i do
          </div>
          <div className="flex flex-col p-2 gap-2">
            {skills.map((item) => (
              <SkillCard
                key={item.id}
                title={item.title}
                description={item.description}
                logo={item.logo}
              />
            ))}
          </div>
          <hr />
        </div>
        {/* Projects */}
        <div className="flex flex-col p-4 gap-2" id="myworks">
          <div className="text-lg">Selected Works</div>
          <div className="flex flex-col p-2 gap-2">
            {projects.map((item) => (
              <ProjectCard
                key={item.id}
                name={item.name}
                summary={item.summary}
                image={item.image}
                link={item.link}
              />
            ))}
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

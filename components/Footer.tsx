import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex bg-black rounded-full px-10 py-6 justify-between mx-2">
      <Image src="/favicon.ico" alt="" width={40} height={40} />
      <div className="flex items-center justify-around text-md w-3/5">
        <Link href="#whatido" className="hidden md:block">
          Services
        </Link>
        <Link href="#experience" className="hidden md:block">
          Experience
        </Link>
        <Link href="#aboutme" className="hidden md:block">
          About Me
        </Link>
        <div className="flex gap-3">
          <Link href="">
            <FaXTwitter />
          </Link>
          <Link href="https://www.linkedin.com/in/kumar-sandeep-82832a154/">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/sand-storm-17">
            <FaGithub />
          </Link>
        </div>
      </div>
      <button className="text-nowrap rounded-full border-gray-30 bg-white text-black px-4 py-2 font-serif">
        Talk With Me
      </button>
    </div>
  );
};

export default Footer;

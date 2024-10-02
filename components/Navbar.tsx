import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-primary p-4 text-black">
      <div className="flex gap-6">
        <div>
          <h1 className="font-semibold hidden md:block">Sandeep</h1>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center justify-end gap-6 text-md">
            <Link href="" className="">
              Services
            </Link>
            <Link href="" className="">
              Experience
            </Link>
            <Link href="" className="">
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
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <button className="rounded-full border-gray-300 border px-4 py-2 font-serif">
          See my work
        </button>
      </div>
    </div>
  );
};

export default Navbar;

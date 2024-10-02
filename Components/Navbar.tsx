import Link from "next/link";

const Navbar = () => {
    return <div>
        <div>
            <div>
                <h1>Sandeep</h1>
            </div>
            <div>
                <Link href="">Services</Link>
                <Link href="">Experience</Link>
                <Link href="">About Me</Link>
                <Link href="">Social Media Links</Link>
            </div>
        </div>
        <div>
            <button>See my work</button>
        </div>
    </div>
}

export default Navbar;
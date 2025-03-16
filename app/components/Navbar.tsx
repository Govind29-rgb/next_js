import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image 
                        src="/logo.webp" 
                        alt="logo" 
                        width={100} 
                        height={50} 
                        className="rounded-full border border-gray-300 shadow-sm"
                    />
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;

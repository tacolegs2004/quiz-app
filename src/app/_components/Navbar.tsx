import Link from "next/link";

const Navbar = () => (
  <nav>
    <ul className="flex flex-row gap-8 p-4 text-white">
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/search"}>Search</Link>
      </li>
      <li>
        <Link href={"/signup"}>Login/sign-up</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;

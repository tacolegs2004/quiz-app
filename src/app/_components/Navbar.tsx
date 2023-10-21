import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-row gap-3 p-4">
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
}

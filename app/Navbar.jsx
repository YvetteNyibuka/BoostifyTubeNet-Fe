import Contact from "@/app/contact/page";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <Link href="">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}

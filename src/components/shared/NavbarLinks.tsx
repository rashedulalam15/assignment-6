"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link href="/" className={pathname === "/" ? "text-[#C2F800]" : ""}>
          Workouts
        </Link>
      </li>
      <li>
        <Link
          href="/PlanedWorkouts"
          className={pathname === "/PlanedWorkouts" ? "text-[#C2F800]" : ""}
        >
          My Plan
        </Link>
      </li>
    </ul>
  );
};

export default NavbarLinks;

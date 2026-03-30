import { NavItemGitHub } from "@/components/navbar/NavItemGitHub"

import { NavbarClient } from "./NavbarClient"

export async function Navbar() {
  return <NavbarClient githubNavItem={<NavItemGitHub />} />
}

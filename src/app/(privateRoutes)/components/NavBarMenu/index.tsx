"use client";
import { LogOut, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/iconsSvg/Logo";
import { cn } from "@/lib/utils";
import { AuthUsrService } from "@/services/auth";
import { colors } from "@/styles/colors";
import { links } from "../../links/links";
import { LinkNavBarMenu } from "../LinkNavBarMenu";

export const NavBarMenu = () => {
  const pathname = usePathname();
  const [isShowMenu, setIsShowMenu] = useState(false);
  const router = useRouter();

  const handleShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  const handleLogout = async () => {
    await AuthUsrService.logoutUser();
    router.push("/");
  };

  return (
    <>
      <button className="pt-2 md:hidden" onClick={handleShowMenu}>
        <Menu color={colors["gray-dark"]} />
      </button>

      <div
        className={cn(
          "-left-44 absolute top-0 bottom-0 z-10 flex w-0 flex-col justify-between overflow-hidden rounded-r-lg bg-blue-primary px-4 pt-4 transition-all md:static md:h-full md:w-64 md:rounded-lg",
          isShowMenu ? "left-0 w-2/3" : ""
        )}
      >
        <div>
          <div className="flex justify-end md:hidden">
            <button onClick={handleShowMenu}>
              <X color={colors["gray-dark"]} />
            </button>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Logo width={24} />
              <h1 className="font-extrabold capitalize">inventory</h1>
            </div>
          </div>
          <nav className="space-y-2">
            {links.map((link) => {
              const LinkIcon = link.icon;
              return (
                <ul key={link.href}>
                  <li>
                    <LinkNavBarMenu
                      active={pathname === link.href}
                      href={link.href}
                    >
                      <LinkIcon width={18} />
                      <span className="text-sm">{link.name}</span>
                    </LinkNavBarMenu>
                  </li>
                </ul>
              );
            })}
          </nav>
        </div>
        <div className="pb-3 md:w-full">
          <Button className="w-full" onClick={handleLogout}>
            Sair
            <LogOut />
          </Button>
        </div>
      </div>
    </>
  );
};

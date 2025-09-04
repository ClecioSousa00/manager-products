"use client";

import { Bell, ChevronDown, Info, LogOut, Search, User2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as Dropdown from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { AuthUsrService } from "@/services/auth";
import { colors } from "@/styles/colors";
import { ItemDropdown } from "../ItemDropdown";

const itemsDropdown = [
  {
    label: "Perfil",
    icon: User2,
  },
  {
    label: "Suporte",
    icon: Info,
  },
  {
    label: "Sair",
    icon: LogOut,
  },
];

export const Header = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await AuthUsrService.logoutUser();
    router.push("/");
  };

  return (
    <header className="flex w-full items-center justify-between gap-2">
      <Input
        className="h-8 placeholder:text-gray-light"
        handleClickIcon={() => console.log("search")}
        icon={<Search color={colors["gray-dark"]} width={18} />}
        placeholder="Buscar Produto"
      />
      <div className="flex items-center gap-1">
        <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-light/30">
          <Bell color={colors["gray-dark"]} width={18} />
        </button>
        <Dropdown.DropdownMenu>
          <Dropdown.DropdownMenuTrigger>
            <div className="p-1 md:flex md:w-full md:max-w-44 md:items-center md:justify-between md:rounded-lg md:border md:border-input">
              <div className="md:flex md:items-center md:gap-1">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-left font-bold text-sm capitalize">
                    morty
                  </p>
                  <p className="text-gray-light text-xs capitalize">
                    gerenciador
                  </p>
                </div>
              </div>
              <ChevronDown
                className="hidden md:block"
                color={colors["gray-dark"]}
                width={14}
              />
            </div>
          </Dropdown.DropdownMenuTrigger>
          <Dropdown.DropdownMenuContent>
            <Dropdown.DropdownMenuLabel>Minha Conta</Dropdown.DropdownMenuLabel>
            <Dropdown.DropdownMenuSeparator />
            {itemsDropdown.map((item, index) => {
              const isLastItem = itemsDropdown.length - 1 === index;
              return (
                <React.Fragment key={item.label}>
                  {isLastItem && <Dropdown.DropdownMenuSeparator />}
                  <Dropdown.DropdownMenuItem
                    onClick={async () => {
                      if (item.label.toLowerCase() === "sair") {
                        await handleLogout();
                      }
                    }}
                  >
                    <ItemDropdown icon={item.icon} label={item.label} />
                  </Dropdown.DropdownMenuItem>
                </React.Fragment>
              );
            })}
            {/* <DropdownMenuItem>
              <div className="flex items-center justify-between w-full">
                <p>Perfil</p> <User2 width={18} color={colors['gray-dark']} />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center justify-between w-full">
                <p>Perfil</p> <User2 width={18} color={colors['gray-dark']} />
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center justify-between w-full">
                <p>Perfil</p> <User2 width={18} color={colors['gray-dark']} />
              </div>
            </DropdownMenuItem> */}
          </Dropdown.DropdownMenuContent>
        </Dropdown.DropdownMenu>
      </div>
    </header>
  );
};

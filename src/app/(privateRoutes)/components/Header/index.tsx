'use client'
import { Input } from '@/components/ui/input'
import { colors } from '@/styles/colors'
import { Search, Bell, ChevronDown, User2, Info, LogOut } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ItemDropdown } from '../ItemDropdown'

const itemsDropdown = [
  {
    label: 'Perfil',
    icon: User2,
  },
  {
    label: 'Suporte',
    icon: Info,
  },
  {
    label: 'Sair',
    icon: LogOut,
  },
]

export const Header = () => {
  return (
    <header className="flex justify-between items-center w-full gap-2">
      <Input
        className="h-8 text-sm"
        placeholder="Buscar Produto"
        icon={<Search width={18} color={colors['gray-dark']} />}
        handleClickIcon={() => console.log('search')}
      />
      <div className="flex items-center gap-1">
        <button className="rounded-lg bg-gray-light/30 w-8 h-8 flex items-center justify-center">
          <Bell width={18} color={colors['gray-dark']} />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className=" md:flex md:items-center md:justify-between md:max-w-44 md:w-full md:rounded-lg md:border-input md:border p-1">
              <div className="md:flex md:items-center md:gap-1">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-left font-bold text-sm capitalize">
                    morty
                  </p>
                  <p className="capitalize text-gray-light text-xs">
                    gerenciador
                  </p>
                </div>
              </div>
              <ChevronDown
                className="hidden md:block"
                width={14}
                color={colors['gray-dark']}
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuContent>
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {itemsDropdown.map((item, index) => {
                const isLastItem = itemsDropdown.length - 1 === index
                return (
                  <>
                    {isLastItem && <DropdownMenuSeparator />}
                    <DropdownMenuItem
                      key={item.label}
                      className="cursor-pointer"
                    >
                      <ItemDropdown icon={item.icon} label={item.label} />
                    </DropdownMenuItem>
                  </>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

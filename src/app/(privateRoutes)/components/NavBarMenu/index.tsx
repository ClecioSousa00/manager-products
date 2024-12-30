'use client'
import { Logo } from '@/iconsSvg/Logo'
import { Menu, X } from 'lucide-react'
import { LinkNavBarMenu } from '../LinkNavBarMenu'
import { usePathname } from 'next/navigation'
import { links } from '../../links/links'
import { colors } from '@/styles/colors'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export const NavBarMenu = () => {
  const pathname = usePathname()
  const [isShowMenu, setIsShowMenu] = useState(false)
  console.log(pathname)

  const handleShowMenu = () => {
    setIsShowMenu(!isShowMenu)
  }

  return (
    <>
      <button onClick={handleShowMenu} className="pt-2  md:hidden">
        <Menu color={colors['gray-dark']} />
      </button>

      <div
        className={cn(
          'bg-blue-primary z-10 -left-44 pt-4 px-4 w-0 top-0 bottom-0 overflow-hidden absolute transition-all  rounded-r-lg md:rounded-lg md:static   md:w-60 md:h-full',
          isShowMenu ? 'w-2/3 left-0 ' : '',
        )}
      >
        <div className="flex justify-end md:hidden">
          <button onClick={handleShowMenu}>
            <X color={colors['gray-dark']} />
          </button>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <Logo width={24} />
            <h1 className=" font-extrabold capitalize">inventory</h1>
          </div>
        </div>
        <nav className="space-y-2">
          {links.map((link) => {
            const LinkIcon = link.icon
            return (
              <ul key={link.href}>
                <li>
                  <LinkNavBarMenu
                    href={link.href}
                    active={pathname === link.href}
                  >
                    <LinkIcon width={18} />
                    <span className="text-sm">{link.name}</span>
                  </LinkNavBarMenu>
                </li>
              </ul>
            )
          })}
        </nav>
      </div>
    </>
  )
}

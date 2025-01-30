'use client'
import { useState } from 'react'
import { BoxLogin } from '../components/BoxLogin'

export const Login = () => {
  const [isActive, setIsActive] = useState(false)

  const handleLogin = async () => {
    setIsActive(!isActive)
  }
  return (
    <div className="relative w-[880px] h-[550px] bg-white rounded-3xl shadow-2xl overflow-hidden">
      <BoxLogin isActive={isActive} handleLogin={handleLogin} />
    </div>
  )
}

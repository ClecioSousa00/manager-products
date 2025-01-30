import { Login } from './(publicRoutes)/login'

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-backgroundImage-custom-gradient">
      <Login />
    </div>
  )
}

import { Header } from "./components/Header";
import { NavBarMenu } from "./components/NavBarMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto h-screen p-3 pr-0 2xl:container">
      <div className="flex w-ful items-start gap-2 md:h-full">
        <NavBarMenu />
        <div className="h-full w-full pr-2 md:overflow-auto">
          <Header />
          <main className="hidden md:block">{children}</main>
        </div>
      </div>
      <main className="md:hidden">{children}</main>
    </div>
  );
}

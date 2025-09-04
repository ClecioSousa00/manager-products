import type { HTMLAttributes, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  textLogin: string;
  children: ReactNode;
  isLoading: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const ContainerForm = ({
  textLogin,
  children,
  className,
  isLoading,
  ...props
}: Props) => {
  return (
    <div
      className={cn(
        "absolute right-0 z-10 flex h-full w-1/2 items-center bg-white p-10 text-center text-[#333] transition-all delay-1200 duration-600 ease-in-out",
        className
      )}
      {...props}
    >
      <form action="#" className="w-full space-y-3">
        <h1 className="mb-4 font-extrabold text-3xl">{textLogin}</h1>
        {children}
        <Button className="w-full" type="submit">
          {!isLoading && textLogin}
          {isLoading && (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          )}
        </Button>
      </form>
    </div>
  );
};

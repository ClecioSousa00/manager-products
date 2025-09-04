import type { ElementType } from "react";
import { colors } from "@/styles/colors";

type Props = {
  icon: ElementType;
  label: string;
};

export const ItemDropdown = ({ icon: Icon, label }: Props) => {
  return (
    <div className="flex w-full items-center justify-between">
      <p>{label}</p> <Icon color={colors["gray-dark"]} width={18} />
    </div>
  );
};

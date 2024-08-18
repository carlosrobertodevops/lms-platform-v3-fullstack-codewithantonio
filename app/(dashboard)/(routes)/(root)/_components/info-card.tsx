import IconBadge from "@/components/icon-badge";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  numberOfItems: number;
  variant?: "default" | "sucsess";
  label: string;
  icon: LucideIcon;
}

export const InfoCard = ({
  variant,
  icon: Icon,
  numberOfItems,
  label,
}: InfoCardProps) => {
  return (
    <div className="border rounded-md flex items-center gap-x-2 p-3">
      <IconBadge
        variant={variant}
        icon={Icon}
      />
      <div>
        <p className="font-medium">
          {label}
        </p>
        <p>
          {numberOfItems }
        </p>
      </div>
    </div>
  )
}
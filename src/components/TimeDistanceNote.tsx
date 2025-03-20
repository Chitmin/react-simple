import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

const TimeDistanceNote = ({
  time,
  className,
}: {
  time: string;
  className?: string;
}) => {
  return (
    <div className={cn("flex mb-2 text-xs", className)}>
      <Clock size="16" />
      <span className="ml-1">{time}</span>
    </div>
  );
};

export default TimeDistanceNote;

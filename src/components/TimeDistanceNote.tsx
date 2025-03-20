import { Clock } from "lucide-react";

const TimeDistanceNote = ({ time }: { time: string }) => {
  return (
    <div className="flex mb-2 text-xs text-gray-500">
      <Clock size="16" />
      <span className="ml-1">{time}</span>
    </div>
  );
};

export default TimeDistanceNote;

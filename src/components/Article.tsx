import TimeDistanceNote from "./TimeDistanceNote";

interface BaseProps {
  img: string;
  title: string;
  content: string;
  time: string;
}
interface Props extends BaseProps {
  variant?: "card" | "plain" | "jumbo";
}

const Card = ({ img, title, content, time }: BaseProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
      <img className="w-full" src={img} alt="Random Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-sm mb-2 line-clamp-5">{content}</p>
        <TimeDistanceNote time={time} />
      </div>
    </div>
  );
};

const Plain = ({ img, title, content, time }: BaseProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={img} alt="Random Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base line-clamp-3">{content}</p>
        <TimeDistanceNote time={time} />
      </div>
    </div>
  );
};

const Jumbo = ({ img, title, content, time }: BaseProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={img} alt="Random Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
        <TimeDistanceNote time={time} />
      </div>
    </div>
  );
};

const map = {
  card: Card,
  plain: Plain,
  jumbo: Jumbo,
} as const;

const Article = ({ img, title, content, time, variant = "card" }: Props) => {
  return <div>{map[variant]({ img, title, content, time })}</div>;
};

export default Article;

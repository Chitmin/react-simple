import TimeDistanceNote from "./TimeDistanceNote";

interface BaseProps {
  img?: string;
  tag?: string;
  title: string;
  content?: string;
  time: string;
}
interface Props extends BaseProps {
  variant?: "card" | "plain" | "jumbo";
  [key: string]: any;
}

const Card = ({ img, title, content, time }: BaseProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
      {img && <img className="w-full" src={img} alt="Random Image" />}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {content && (
          <p className="text-gray-700 text-sm mb-2 line-clamp-5">{content}</p>
        )}
        {time && <TimeDistanceNote time={time} className="text-gray-500" />}
      </div>
    </div>
  );
};

const Plain = ({ tag, title, content, time, ...rest }: BaseProps) => {
  return (
    <article {...rest}>
      <header>
        <h1 className="text-xl font-bold text-secondary mb-2">{tag}</h1>
        <h2 className="text-md font-bold mb-2">{title}</h2>
      </header>
      <p className="text-sm text-gray-700 mb-2 line-clamp-3">{content}</p>
      <footer>
        <TimeDistanceNote time={time} className="text-gray-500" />
      </footer>
    </article>
  );
};

const Jumbo = ({ img, title, tag, content, time }: BaseProps) => {
  return (
    <div
      className={`bg-cover bg-center h-full text-white p-8 bg-[url(${img})] mb-8 shadow-lg`}
    >
      <div className="flex flex-col justify-between min-h-[24rem]">
        {tag && <h2 className="text-4xl uppercase">{tag}</h2>}
        <article className="flex flex-col h-full">
          <header>
            <h1 className="text-2xl font-bold mb-4 uppercase">{title}</h1>
          </header>
          {content && <p className="text-white mb-4">{content}</p>}
          {time && (
            <footer className="text-white">
              <TimeDistanceNote time={time} />
            </footer>
          )}
        </article>
      </div>
    </div>
  );
};

const map = {
  card: Card,
  plain: Plain,
  jumbo: Jumbo,
} as const;

const Article = ({
  img,
  title,
  content,
  time,
  variant = "card",
  ...rest
}: Props) => {
  return map[variant]({ img, title, content, time, ...rest });
};

export default Article;

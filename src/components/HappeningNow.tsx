import { randomDateDistanceFormat } from "@/lib/utils";
import Article from "./Article";

const dummyContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
  cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Quisquam, cumque.`;
const HappeningNow = ({ ...props }) => {
  return (
    <div {...props}>
      <h2 className="text-4xl font-bold uppercase my-8">HAPPENING NOW</h2>
      <div className="block xl:flex">
        <div className="w-full h-full xl:w-2/3 lg:mr-10 md:mr-8 mr-4">
          <Article
            img="https://picsum.photos/seed/happening/600"
            tag="city"
            title="Large article title"
            content={dummyContent}
            time={randomDateDistanceFormat()}
            variant="jumbo"
          />
          <Article
            img="https://picsum.photos/seed/happening/600"
            tag="travel"
            title="Large article title"
            content={dummyContent}
            time={randomDateDistanceFormat()}
            variant="jumbo"
          />
        </div>
        <div className="w-full h-full xl:w-1/3">
          <Article
            img="https://picsum.photos/seed/right/250/120"
            title="Small title"
            time={randomDateDistanceFormat()}
          />
          <Article
            img="https://picsum.photos/seed/right/250/120"
            title="Small title"
            time={randomDateDistanceFormat()}
          />
          <Article
            img="https://picsum.photos/seed/right/250/120"
            title="Small title"
            time={randomDateDistanceFormat()}
          />
        </div>
      </div>
    </div>
  );
};

export default HappeningNow;

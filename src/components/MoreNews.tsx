import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { useState } from "react";
import { randomDateDistanceFormat } from "@/lib/utils";
import TimeDistanceNote from "./TimeDistanceNote";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./CarouselScrollButtons";

const NewsArticle = ({
  category,
  title,
}: {
  category: string;
  title: string;
}) => {
  return (
    <article className="mb-8">
      <header>
        <h1 className="text-xl font-bold text-secondary mb-2">{category}</h1>
        <h2 className="text-md font-bold mb-2">{title}</h2>
      </header>
      <p className="text-sm text-gray-700 mb-2 line-clamp-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <footer>
        <TimeDistanceNote time={randomDateDistanceFormat()} />
      </footer>
    </article>
  );
};

const MoreNews = () => {
  const [api, setApi] = useState<CarouselApi>();
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(api);

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="flex flex-col justify-center min-h-svh max-w-full">
        <div className="flex justify-between items-center w-full border-b-2 border-gray-200 pb-8 mb-8">
          <h1 className="text-4xl font-bold uppercase">More News</h1>
          <div>
            <PrevButton
              disabled={prevBtnDisabled}
              onClick={onPrevButtonClick}
            />
            <NextButton
              disabled={nextBtnDisabled}
              onClick={onNextButtonClick}
            />
          </div>
        </div>
        <Carousel setApi={setApi}>
          <CarouselContent>
            <CarouselItem>
              <NewsArticle category="Travel" title="Article Title" />
              <NewsArticle category="Technology" title="Article Title" />
            </CarouselItem>
            <CarouselItem>
              <NewsArticle category="Travel 2" title="Article Title" />
              <NewsArticle category="Technology 2" title="Article Title" />
            </CarouselItem>
            <CarouselItem>
              <NewsArticle category="Travel 3" title="Article Title" />
              <NewsArticle category="Technology 3" title="Article Title" />
            </CarouselItem>
            <CarouselItem>
              <NewsArticle category="Travel 4" title="Article Title" />
              <NewsArticle category="Technology More" title="Article Title" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default MoreNews;

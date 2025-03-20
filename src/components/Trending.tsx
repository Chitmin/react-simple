import { randomDateDistanceFormat } from "@/lib/utils";
import Article from "./Article";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./CarouselScrollButtons";
import { useState } from "react";

const articles = [
  {
    img: "https://picsum.photos/600/300",
    title: "Dolore magna aliqua",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    time: randomDateDistanceFormat(),
  },
  {
    img: "https://picsum.photos/600/300",
    title: "Morbi eleifend a libero",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    time: randomDateDistanceFormat(),
  },
  {
    img: "https://picsum.photos/600/300",
    title: "Dolore magna aliqua",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    time: randomDateDistanceFormat(),
  },
  {
    img: "https://picsum.photos/600/300",
    title: "Morbi eleifend a libero",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    time: randomDateDistanceFormat(),
  },
  {
    img: "https://picsum.photos/600/300",
    title: "Morbi eleifend a libero",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    time: randomDateDistanceFormat(),
  },
  {
    img: "https://picsum.photos/600/300",
    title: "Dolore magna aliqua",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    time: randomDateDistanceFormat(),
  },
  {
    img: "https://picsum.photos/600/300",
    title: "Morbi eleifend a libero",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    time: randomDateDistanceFormat(),
  },
];

const Trending = ({ ...props }) => {
  const [api, setApi] = useState<CarouselApi>();
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(api);

  return (
    <div {...props}>
      <h2 className="text-4xl font-bold uppercase mb-8">Trending</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        setApi={setApi}
        className="w-full"
      >
        <div className="flex justify-end mb-4">
          <PrevButton disabled={prevBtnDisabled} onClick={onPrevButtonClick} />
          <NextButton disabled={nextBtnDisabled} onClick={onNextButtonClick} />
        </div>
        <CarouselContent className="mb-4">
          {articles.map((article, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Article
                key={"" + index}
                img={article.img}
                title={article.title}
                content={article.content}
                time={article.time}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end mb-4">
          <PrevButton disabled={prevBtnDisabled} onClick={onPrevButtonClick} />
          <NextButton disabled={nextBtnDisabled} onClick={onNextButtonClick} />
        </div>
      </Carousel>
    </div>
  );
};

export default Trending;

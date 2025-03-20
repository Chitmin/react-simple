import { type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  api: CarouselApi | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!api) return;
    api.scrollPrev();
  }, [api]);

  const onNextButtonClick = useCallback(() => {
    if (!api) return;
    api.scrollNext();
  }, [api]);

  const onSelect = useCallback((api: CarouselApi | undefined) => {
    if (!api) return;
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) return;

    onSelect(api);
    api.on("reInit", onSelect).on("select", onSelect);
  }, [api, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type ButtonProp = {
  onClick: () => void;
  disabled: boolean;
};

export const PrevButton = ({ onClick, disabled }: ButtonProp) => {
  return (
    <Button variant="ghost" size="icon" disabled={disabled} onClick={onClick}>
      <ChevronLeft />
    </Button>
  );
};

export const NextButton = ({ onClick, disabled }: ButtonProp) => {
  return (
    <Button variant="ghost" size="icon" disabled={disabled} onClick={onClick}>
      <ChevronRight />
    </Button>
  );
};

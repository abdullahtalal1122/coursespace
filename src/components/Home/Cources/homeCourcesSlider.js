import Card from "./CourcesSliderCard";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const HomeCourcesSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <Card className="embla__slide" src="images/slider1.webp" width="100%" />
        <Card className="embla__slide" src="images/slider2.webp" width="100%" />
        <Card className="embla__slide" src="images/slider1.webp" width="100%" />
        <Card className="embla__slide" src="images/slider4.webp" width="100%" />
        <Card className="embla__slide" src="images/slider3.webp" width="100%" />
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Pre
      </button>
      <button className="embla__next" onClick={scrollNext}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};
export default HomeCourcesSlider;

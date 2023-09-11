import image1 from "./images/slider-1.webp";
import image2 from "./images/slider-2.webp";
import image3 from "./images/slider-3.webp";
import image4 from "./images/slider-4.webp";
import image5 from "./images/slider-5.webp";

export const images = [image1, image2, image3, image4, image5];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;

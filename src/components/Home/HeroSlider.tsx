import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import book1 from "../../assets/book1.jpg";
import book2 from "../../assets/book2.jpg";
import book3 from "../../assets/book3.jpg";

const books = [
  {
    id: 1,
    img: book1,
    title: "Book 1",
  },
  {
    id: 2,
    img: book2,
    title: "Book 2",
  },
  {
    id: 3,
    img: book3,
    title: "Book 3",
  },
];

const HeroSlider = () => {
  return (
    <div>
      <Carousel
        showArrows={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows
        dynamicHeight={false}
        swipeable={true}
      >
        {books.map((book) => (
          <div key={book.id}>
            <img
              className="h-[500px] lg:h-[600px] 2xl:h-[800px] object-cover"
              src={book.img}
              alt={book.title}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSlider;

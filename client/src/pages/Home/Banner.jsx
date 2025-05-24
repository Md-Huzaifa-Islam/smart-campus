import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const foodImages = [
  {
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    legend: "Delicious Burger",
  },
  {
    url: "https://i.ibb.co/k6zrVjG0/rachel-park-hrlvr2-Zl-UNk-unsplash.jpg",
    legend: "Fresh",
  },
  {
    url: "https://i.ibb.co/cS3qGgZ3/alan-hardman-SU1-LFoe-EUkk-unsplash.jpg",
    legend: "Tasty Pizza",
  },
];

const Banner = () => {
  return (
    <div className=" mx-auto overflow-hidden shadow-2xl">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3500}
        showStatus={false}
        className=""
      >
        {foodImages.map((item, idx) => (
          <div key={idx} className="relative">
            <img
              src={item.url}
              alt={item.legend}
              className="object-cover h-[64vh] w-full "
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-xl">
              <p className="text-white text-2xl font-bold drop-shadow">
                {item.legend}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;

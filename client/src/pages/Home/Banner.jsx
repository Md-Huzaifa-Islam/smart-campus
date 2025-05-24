
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const foodImages = [
    {
        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        legend: "Delicious Burger"
    },
    {
        url: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80",
        legend: "Fresh Salad"
    },
    {
        url: "https://images.unsplash.com/photo-1516685018646-5499d0a7d42f?auto=format&fit=crop&w=800&q=80",
        legend: "Tasty Pizza"
    }
];

const Banner = () => {
    return (
        <div className="max-w-4xl mx-auto mt-8 rounded-xl overflow-hidden shadow-2xl">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={3500}
                showStatus={false}
                className="rounded-xl"
            >
                {foodImages.map((item, idx) => (
                    <div key={idx} className="relative">
                        <img
                            src={item.url}
                            alt={item.legend}
                            className="object-cover h-80 w-full rounded-xl"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-xl">
                            <p className="text-white text-2xl font-bold drop-shadow">{item.legend}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Banner;
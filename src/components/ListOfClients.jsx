import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const images = [
  {
    imageUrl: "images/gm.jpeg",
    title: "Environmental Legal Advisory",
  },
  {
    imageUrl: "images/fl.jpg",
    title: "Sewage Treatment Plant",
  },
  {
    imageUrl: "images/fortis.jpg",
    title: "Water Treatment Plant",
  },
  {
    imageUrl: "images/shtron.jpg",
    title: "Effluent Treatment Plant",
  },
  {
    imageUrl: "images/narayana.jpg",
    title: "Operations & Maintenance",
  },
];

const ListOfClients = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  return (
    <>
      <div>
        <p className="text-center text-2xl font-semibold from-neutral-100 text-slate-600">
          our esteemed
        </p>
        <h1 className="text-6xl font-semibold text-[#58a337] text-center">
          Clients
        </h1>
      </div>
      <div className="relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          size={80}
          onClick={slideLeft}
        />
        <div
          id="slider"
          className="mx-10 my-10 flex items-center overflow-x-scroll scroll-smooth scrollbar-hide cursor-grab"
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.imageUrl}
              alt={image.title}
              className="mx-2 md:mx-6 inline-block p-2 object-cover hover:scale-105 md:h-40 h-36 w-auto cursor-grab hover:opacity-80 transition-opacity duration-300"
            />
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          size={80}
          onClick={slideRight}
        />
      </div>
    </>
  );
};

export default ListOfClients;

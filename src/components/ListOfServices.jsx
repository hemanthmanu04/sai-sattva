import { NavLink } from "react-router-dom";

const data = [
  {
    imageUrl: "images/world.jpg",
    title: "Environmental Legal Advisory",
    description:
      "We offer legal advisory in connection with Environmental acts, rules and regulations.",
    path: "/ELA",
  },
  {
    imageUrl: "images/stp2.jpg",
    title: "Sewage Treatment Plant",
    description:
      "We offer comprehensive STP services, encompassing the installation of sewage treatment plants tailored for commercial, industrial, and residential needs, along with dedicated maintenance services",
    path: "/STP",
  },
  {
    imageUrl: "images/stp4.png",
    title: "Water Treatment Plant",
    description:
      " We provide Water Treatment Plant (WTP) services, excelling in the installation, operation, and maintenance of versatile softening plants for efficient removal of hardness ions through resin-mediated ion exchange.",
    path: "/WTP",
  },
  {
    imageUrl: "images/etp2.jpg",
    title: "Effluent Treatment Plant",
    description:
      "We excel in delivering innovative Effluent Treatment Plants (ETP) for diverse industrial sectors. Our solutions, combining efficient physico-chemical and biological treatments, ensure thorough water treatment with low power consumption and rapid installation.",
    path: "/ETP",
  },
  {
    imageUrl: "images/main.jpg",
    title: "Operations & Maintenance",
    description:
      "At Sai Sattva, we specialize in undertaking annual maintenance and operation contracts for Sewage, Effluent, and Water treatment plants. Our dedicated team of professionals ensures meticulous care and delivers top-notch work in plant maintenance",
    path: "/AMC",
  },
  {
    imageUrl: "images/swim2.jpg",
    title: "Swimming Pool Services",
    description:
      "We at SSEC, provide premier swimming pool maintenance in Bangalore, using high-quality equipment and eco-friendly chemicals to ensure a germ-free and immaculate pool, promoting a safe and enjoyable experience for your family.",
    path: "/SwimmingPool",
  },
  {
    imageUrl: "images/chem.jpg",
    title: "Industrial Chemical Supply",
    description:
      "We are a prominent supplier of industrial chemicals for Effluent Treatment Plants, Sewage Treatment Plants, and Water Treatment Plants. Our product range also includes trading in various chemicals such as food-grade chemicals, solvents, acids, and inorganic salts.",
    path: "/ChemicalSupply",
  },
];

const ListOfServices = () => {
  return (
    <>
      <div className="bg-slate-100 ">
        <h1 className="text-center lg:mb-0 font-semibold pt-3 text-[#58a337] text-6xl">
          Services
        </h1>
        <p className="text-center text-2xl font-semibold from-neutral-100 text-slate-600">
          we offer
        </p>
        <div className="m-6 flex flex-wrap justify-start">
          {data.map((service, index) => (
            <div key={index} className="m-4">
              <div className="bg-[#EAECCC] rounded-xl pt-8 lg:h-[620px] lg:w-[400px] mx-auto flex flex-col">
                <img
                  className="rounded-xl object-fill lg:h-50 px-5 lg:px-3 w-full"
                  src={service.imageUrl}
                  alt=""
                />
                <h2 className="p-4 text-center text-3xl font-semibold text-[#58a337]">
                  {service.title}
                </h2>
                <p className="text-center mx-1.5 font-medium text-green-900 p-2">
                  {service.description}
                </p>
                <div className="flex-grow"></div>
                <div className="flex items-center justify-center pb-4">
                  <NavLink
                    to={service.path}
                    className="hover:bg-green-900 text-lg h-14 w-36 mt-7 text-center bg-[#58a337] text-white rounded-lg flex items-center justify-center"
                  >
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListOfServices;

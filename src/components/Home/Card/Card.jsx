import Movile from "../../../assets/icons/service1.png";
import Tablet from "../../../assets/icons/service2.png";
import Dextop from "../../../assets/icons/service3.png";
import Video from "../../../assets/icons/service5.png";
import Writen from "../../../assets/icons/service4.png";
import Registration from "../Registration/Registration";
import { useEffect, useState } from "react";

const Card = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://creative-agency-31tg2vnnb-saidee-hasans-projects.vercel.app/uplodImages/uplodImages")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const cardData = [
    {
      img: Movile,
      name: "Web & Mobile design",
      title:
        "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    },
    {
      img: Tablet,
      name: "Graphic design",
      title:
        "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
    },
    {
      img: Video,
      name: "Video EditIng",
      title:
        "With well edit, we build amazing apps for all platforms, mobile and web apps in general.",
    },
    {
      img: Writen,
      name: "Writen book ",
      title:
        "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
    },
    {
      img: Dextop,
      name: "Web Development ",
      title:
        "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
    },
    {
      img: Movile,
      name: "Web & Mobile design",
      title:
        "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    },
  ];

  // console.log(cardData);
  return (
    <section>
      <h1 className="text-xl mt-5 text-green-600">Provide awesome services</h1>
      {product.map((info) => (
        <div className="sm:w-52 mt-5 md:w-64 float-left ml-7 mb-5">
          <input
            type="checkbox"
            id="flowbite-option"
            value=""
            className="hidden peer"
          />
          <label className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="block">
              <img src={info.image} alt="" />
              <div className="w-full text-lg font-semibold">Vue Js</div>
              <div className="w-full text-sm">
                Vue.js is an model–view front end JavaScript Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Repellendus quibusdam
                ipsa, nihil corrupti officiis placeat ea similique quia magni
                voluptas adipisci consectetur beatae provident ut, expedita quam
                nam. Odit, adipisci. framework.
              </div>
            </div>
          </label>
        </div>
      ))}
    </section>
  );
};

export default Card;

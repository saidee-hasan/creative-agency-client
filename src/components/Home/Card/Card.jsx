import Movile from "../../../assets/icons/service1.png";
import Tablet from "../../../assets/icons/service2.png";
import Dextop from "../../../assets/icons/service3.png";
import Video from "../../../assets/icons/service5.png";
import Writen from "../../../assets/icons/service4.png";
import Registration from "../Registration/Registration";

const Card = () => {
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
 
  console.log(cardData);
  return (
    <section>
      {cardData.map((info) => (
        <div key={info.title}>
          <div className="sm:w-1/4 p-6 float-left sm:ml-24 bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="w-20 " src={info.img} alt="" />

            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {info.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              {info.title}
            </p>
            <button
              data-modal-target="crud-modal"
              data-modal-toggle="crud-modal"
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Apply Now
            </button>
          </div>
        </div>
      ))}
      <Registration
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
      ></Registration>
    </section>
  );
};

export default Card;

import Frame from "../../../assets/logos/Frame.png";
import Airbnb from "../../../assets/logos/airbnb.png";
import Netflix from "../../../assets/logos/netflix.png";
import Slack from "../../../assets/logos/slack.png";
import uber from "../../../assets/logos/uber.png";

const Header = () => {
  return (
    <div>
      <br />
      <br />
      <section className="bg-orange-400 rounded-md">
        <div className="container mx-auto  flex sm:text-center  justify-between flex-col sm:items-center sm:flex-row sm:pl-5">
          <div className="order-2 p-8 sm:order-1 sm:w-1/2 ">
            <h1 className="text-base sm:text-2xl ">
              Let’s Grow Your Brand To The Next Level
            </h1>
            <br />
            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Green to Blue
            </button>
          </div>
          <div className="order-1 sm:order-2 w-80 sm:w-1/2">
            <img src={Frame} alt="" />
          </div>
        </div>
      </section>
      <br />
      <div className="grid gap-4 ">
        <div className="grid grid-cols-4 gap-5">
          <div>
            <img
              className="h-auto sm:max-w-20  rounded-lg"
              src={Airbnb}
              alt=""
            />
          </div>

          <div>
            <img
              className="h-auto sm:max-w-20  rounded-lg"
              src={Netflix}
              alt=""
            />
          </div>
          <div>
            <img className="h-auto sm:max-w-20 rounded-lg" src={uber} alt="" />
          </div>
          <div>
            <img className="h-auto sm:max-w-20 rounded-lg" src={Slack} alt="" />
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Header;

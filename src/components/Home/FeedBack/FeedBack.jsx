import { useEffect, useState } from "react";
import customer1 from "../../../assets/coustomer/customer-1.png";
import customer2 from "../../../assets/coustomer/customer-2.png";
import customer3 from "../../../assets/coustomer/customer-3.png";
import From from "../From/From";
import FeedBackData from "../FeedBackData/FeedBackData";

const FeedBack = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://creative-agency-alpha.vercel.app/uplodImages")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const coustomarData = [
    {
      img: customer1,
      name: "Nash Patrik",
      title: " CEO, Manpol",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    },
    {
      img: customer2,
      name: "Saidee Patrik",
      title: " CEO, Manpol",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    },
    {
      img: customer3,
      name: "Zakir Hossen",
      title: " CEO, Manpol",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
    },
  ];

  return (
    <div className="">
      <h1 className="text-xl">
        Clients <samp className="text-green-700 float-">Feedback</samp>{" "}
      </h1>
   
{
  product.map(info => <FeedBackData info={info}></FeedBackData>)
}
       
    
    </div>
  );
};

export default FeedBack;

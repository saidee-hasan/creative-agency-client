import { useEffect, useState } from "react";
import customer1 from "../../../assets/coustomer/customer-1.png";
import customer2 from "../../../assets/coustomer/customer-2.png";
import customer3 from "../../../assets/coustomer/customer-3.png";

const FeedBack = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/uplodImages")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  console.log(product);
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
    <div>
      <h1 className="text-xl">
        Clients <samp className="text-green-700">Feedback</samp>{" "}
      </h1>
      <section>
        {product.map((info) => (
          <div key={info.title}>
            <div className="sm:w-1/4 w-full text-center  p-6 float-left sm:ml-24 bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="bg-slate-600 w-full rounded-sm">
                <img className="w-20" src={info.image} alt="" />
              </div>

              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {info.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                {info.title}
              </p>
              <a
                href="#"
                className="inline-flex font-medium items-center text-blue-600 hover:underline"
              >
                See our guideline
                <svg
                  className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FeedBack;

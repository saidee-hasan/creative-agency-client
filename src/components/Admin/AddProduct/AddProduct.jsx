import { useEffect, useState } from "react";
import Slidebar from "../../Share/SlideBar/Slidebar";

const AddProduct = () => {
  const handleSubmit = () => {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const name = form.get("name");
    const title = form.get("title");
    const data = new FormData();
    data.append("image", image);

    fetch(
      "https://api.imgbb.com/1/upload?key=0e32791b26cbe3ec3f996038948f01a7",
      {
        method: "POST",
        body: data,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const userData = {
          name,
          title,
          image: data.data.url,
        };
        fetch("https://creative-agency-31tg2vnnb-saidee-hasans-projects.vercel.app/uplod", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      });
  };
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://creative-agency-31tg2vnnb-saidee-hasans-projects.vercel.app/uplodImages")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const deleteProduct = (id)=>{
    fetch(`https://creative-agency-31tg2vnnb-saidee-hasans-projects.vercel.app/delete/${id}`,{
      method: "DELETE",
    })
    .then(res=> res.json())
    .then(result=>{
      console.log('deleted successfully',result);
    })

   

  }

  return (
    <div className="sm:ml-36 w-full">
      <Slidebar></Slidebar>

      <div className="p-4 ">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <h3 className="text-red-600">Only 4 products added</h3>
          <form action="" onSubmit={handleSubmit}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Uplod image
            </label>
            <input
              className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              name="image"
              type="file"
            />

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              placeholder="name"
              name="name"
              type="text"
            />

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title
            </label>
            <input
              className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              name="title"
              placeholder="text"
              type="text"
            />

            <button type="submit">Submit</button>
          </form>
     
      {/* //user product delete */}
      <div className="mt-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email ID</th>
              <th>Registating date</th>
              <th>Volunteer list</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {product?.map((item, i) => {
              return (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.title}</td>
                  <td>{item.image}</td>
                  
                  <td>
                    <button onClick={() => deleteProduct(item._id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
      </div>
  );
};

export default AddProduct;

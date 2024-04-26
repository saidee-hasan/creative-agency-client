import Slidebar from "../../Share/SlideBar/Slidebar";

const AddProduct = () => {
  const handleSubmit = () => {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const name = form.get("name");
    const title = form.get("title");
    console.log(name, title);
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
        const userData ={
            name,
            title,
            image:data.data.url
        }
        fetch("http://localhost:5000/uplod", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
          })
            .then((response) => response.json())
            .then((data) => console.log(data));
      });



   
  };

  return (
    <div>
      <Slidebar></Slidebar>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <form action="" onSubmit={handleSubmit}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Default size
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
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

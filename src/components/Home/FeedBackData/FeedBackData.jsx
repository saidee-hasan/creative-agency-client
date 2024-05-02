import From from "../From/From";


const FeedBackData = ({info}) => {
    
    return (
        <div>
             <div key={info.title}>
         <div className="sm:w-1/4 p-6 mt-8 sm:w-72 w-full sm:h-96 float-left sm:ml-2 bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           <img className="w-20 " src={info.image} alt="" />

           <a href="#">
             <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
               {info.name}
             </h5>
           </a>
           <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">
             {info.title}
           </p>
           <button
           
             type="button"
             className=" cursor-pointer  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
           >
           <From info={info}></From>
           </button>
         </div>
       </div>
         
        </div>
    );
};

export default FeedBackData;
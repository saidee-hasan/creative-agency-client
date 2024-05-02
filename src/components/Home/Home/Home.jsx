import FeedBack from "../FeedBack/FeedBack";
import Registration from "../Registration/Registration";
import Card from "../Card/Card";

import Header from "../Header/Header";
import Navbar from "../../Share/Navbar/Navbar";
import SubmitFrom from "../SubmitFrom/SubmitFrom";
import Carousel from './../Carousel/Carousel';



const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Card></Card>
      <Carousel></Carousel>
      <FeedBack></FeedBack>
      
     
   
      {/* <Registration></Registration> */}
    </div>
  );
};

export default Home;

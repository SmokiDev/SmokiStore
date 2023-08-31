import { useState } from "react";
import data from "./data";
import frequentquestions from "./frequentquestions";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Caroption from "./components/Caroption";
import Testimonials from "./components/Testimonials";
import Questions from "./components/Questions";
import Playappstore from "./components/Playappstore";
import Footer from "./components/Footer";
import { AiOutlineRight } from "react-icons/ai";
import { BiSolidCarMechanic } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FcMoneyTransfer } from "react-icons/fc";

function App() {
  const [active, setActive] = useState("car-1");
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <div id="vehicle">
        <div className="grid items-center justify-center text-center">
          <h3 className="text-3xl mt-10">Vehicle Models</h3>
          <h2 className="text-slate-900 font-bold my-14 text-3xl lg:text-6xl">
            Our rental fleet
          </h2>
          <p className="text-xl mb-20 mt-5">
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or buisness trip
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 lg:place-items-center lg:py-20">
          <div className="lg:mr-40">
            <button
              className="flex items-center justify-center hover:bg-orange-500 px-4 py-2 font-bold m-5 mx-auto lg:mx-10 lg:my-14"
              onClick={() => setActive("car-1")}
            >
              Audi A1
            </button>
            <button
              className="flex items-center justify-center hover:bg-orange-500 px-4 py-2 font-bold m-5 mx-auto lg:mx-10 lg:my-14"
              onClick={() => setActive("car-2")}
            >
              BMW X6
            </button>
            <button
              className="flex items-center justify-center hover:bg-orange-500 px-4 py-2 font-bold m-5 mx-auto lg:mx-10 lg:my-14"
              onClick={() => setActive("car-3")}
            >
              Volkswagen Golf
            </button>
            <button
              className="flex items-center justify-center hover:bg-orange-500 px-4 py-2 font-bold m-5 mx-auto lg:mx-10 lg:my-14"
              onClick={() => setActive("car-4")}
            >
              Jeep Wrangler
            </button>
            <button
              className="flex items-center justify-center hover:bg-orange-500 px-4 py-2 font-bold m-5 mx-auto lg:mx-10 lg:my-14"
              onClick={() => setActive("car-5")}
            >
              Mercedes Benz
            </button>
          </div>
          <div>
            {active === "car-1" && <Caroption data={data} carIndex={0} />}
            {active === "car-2" && <Caroption data={data} carIndex={1} />}
            {active === "car-3" && <Caroption data={data} carIndex={2} />}
            {active === "car-4" && <Caroption data={data} carIndex={3} />}
            {active === "car-5" && <Caroption data={data} carIndex={4} />}
          </div>
        </div>
      </div>
      <div className="grid items-center justify-center bg-black text-white">
        <h2 className="font-bold my-14 text-3xl lg:text-7xl mx-12 text-center">
          Save big with our cheap car rental!
        </h2>
        <p className="text-3xl mt-5 text-center mb-14">
          Top Airports. Local Suppliers.{" "}
          <span className="text-red-500">24/7</span>
          Support!
        </p>
      </div>
      <div className="flex items-center justify-center">
        <img src="./images/cars-nobg.png" className="w-screen lg:mt-96 my-32" />
      </div>
      <div
        className="max-w-screen-2xl grid grid-cols-1 lg:grid-cols-2 lg:place-items-center lg:py-20 mx-auto"
        id="about"
      >
        <div className="grid text-center">
          <h3 className="font-bold text-3xl">Why Choose Us</h3>
          <h2 className="font-bold my-14 text-3xl lg:text-5xl">
            Best valued deals you will ever find
          </h2>
          <p className="text-xl tracking-wider mx-auto">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so dont miss out on your chance to save big.
          </p>
          <button className="flex items-center gap-10 bg-orange-500 py-3 px-10 text-white font-bold rounded-lg shadow mt-14 hover:bg-orange-700 transition-all duration-200 mx-auto">
            Find Details <AiOutlineRight />
          </button>
        </div>
        <div className="grid text-center gap-12 lg:gap-4">
          <div className="grid lg:grid-cols-2">
            <BiSolidCarMechanic className="text-orange-500 lg:row-span-2 text-8xl mt-20 mx-auto lg:mt-10 lg:mr-10" />
            <h3 className="font-bold text-3xl py-12 lg:py-4">
              Cross Country Crive
            </h3>
            <p className="text-xl tracking-wider">
              Take your driving experience to the next level with our top-notch
              vehicles for your cross-country adventures.
            </p>
          </div>
          <div className="grid lg:grid-cols-2">
            <RiMoneyDollarCircleLine className="text-orange-500 lg:row-span-2 text-8xl mt-20 mx-auto lg:mt-10 lg:mr-10" />
            <h3 className="font-bold text-3xl py-12 lg:py-4">
              All Inclusive Pricing
            </h3>
            <p className="text-xl tracking-wider">
              Get everything you need in one convenient transparent price with
              our all-inclusive pricing policy
            </p>
          </div>
          <div className="grid lg:grid-cols-2">
            <FcMoneyTransfer className="text-orange-500 lg:row-span-2 text-8xl mt-20 mx-auto lg:mt-10 lg:mr-10" />
            <h3 className="font-bold text-3xl py-12 lg:py-4">
              No hidden Charges
            </h3>
            <p className="text-xl tracking-wider">
              Enjoy peace of mind with our no hidden charge policy. We belive in
              transparent and honest pricing
            </p>
          </div>
        </div>
      </div>
      <Testimonials />
      <Questions frequentquestions={frequentquestions} />
      <Playappstore />
      <Footer />
    </>
  );
}
export default App;

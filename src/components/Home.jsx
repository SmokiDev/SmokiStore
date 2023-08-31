import {
  AiOutlineRight,
  AiOutlineCheck,
  AiFillCar,
  AiOutlineCalendar,
} from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

export default function Home() {
  return (
    <section
      className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:place-items-center lg:py-20"
      id="hero"
    >
      <article className="mt-32 lg:order-2">
        <img src="./images/car-bmw.png" className="w-max" />
      </article>
      <article className="px-20 pb-10 lg:order-1">
        <h2 className="bg-slate-100 py-1 px-2 text-orange-400 uppercase tracking-wide text-small font-bold inline-block rounded shadow mb-10">
          Plan your trip now
        </h2>
        <h1 className="text-slate-900 font-bold my-10 text-3xl lg:text-5xl">
          Save <span>big</span> with our car rental
        </h1>
        <p className="text-slate-600 my-10 leading-relaxed">
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more
        </p>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-4 bg-orange-500 py-3 px-5 text-white font-bold rounded-lg shadow mt-5 lg:mt-0 hover:bg-orange-700 transition-all duration-200">
            Book ride <AiOutlineCheck />
          </button>
          <button className="flex items-center gap-4 bg-black py-3 px-5 text-white font-bold rounded-lg shadow mt-5 lg:mt-0 hover:bg-white hover:text-black transition-all duration-300">
            Learn more <AiOutlineRight />{" "}
          </button>
        </div>
      </article>
      <article className="order-3 lg:col-span-2 pt-10 mt-32 lg:max-w-screen-2xl">
        <h2 className="flex items-center justify-center bg-slate-100 py-3 text-orange-400 uppercase tracking-wide text-small font-bold rounded shadow mb-10 lg:mb-32">
          Book a car
        </h2>
        <div className="max-w-screen-2xl grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 justify-center gap-10 lg:gap-32 items-center">
          <div className="flex gap-10 flex-col p-5">
            <label htmlFor="cars" className="flex items-center gap-2">
              <AiFillCar className="text-orange-500" />
              Select your car type <span className="text-orange-500">*</span>
            </label>
            <select id="cars" defaultValue={"DEFAULT"}>
              <option value="DEFAULT" disabled>
                Select your car type
              </option>
              <option value="bmw">Bmw</option>
              <option value="audi">Audi</option>
              <option value="golf">Golf</option>
              <option value="mercedes">Mercedes</option>
              <option value="Jeep">Jeep</option>
              <option value="ford">Ford</option>
            </select>
          </div>
          <div className="flex gap-10 flex-col p-5">
            <label htmlFor="pickup" className="flex items-center gap-2">
              <MdLocationPin className="text-orange-500" />
              Pick-up<span className="text-orange-500">*</span>
            </label>
            <select id="pickup" defaultValue={"DEFAULT"}>
              <option value={"DEFAULT"} disabled>
                Pick-up
              </option>
              <option value="beograd">Beograd</option>
              <option value="kragujevac">Kragujevac</option>
              <option value="nis">Nis</option>
              <option value="pirot">Pirot</option>
              <option value="noviSad">Novi Sad</option>
              <option value="subotica">Subotica</option>
            </select>
          </div>
          <div className="flex gap-10 flex-col p-5">
            <label htmlFor="dropoff" className="flex items-center gap-2">
              <MdLocationPin className="text-orange-500" />
              Drop-off
              <span className="text-orange-500">*</span>
            </label>
            <select id="dropoff" defaultValue={"DEFAULT"}>
              <option value={"DEFAULT"} disabled>
                Drop-off
              </option>
              <option value="beograd">Beograd</option>
              <option value="kragujevac">Kragujevac</option>
              <option value="nis">Nis</option>
              <option value="pirot">Pirot</option>
              <option value="noviSad">Novi Sad</option>
              <option value="subotica">Subotica</option>
            </select>
          </div>
          <div className="flex gap-10 flex-col p-5">
            <label htmlFor="pickupmonth" className="flex items-center gap-2">
              <AiOutlineCalendar className="text-orange-500" />
              Pick-up <span className="text-orange-500">*</span>
            </label>
            <input type="date" name="" id="pickupmonth" />
          </div>
          <div className="flex gap-10 flex-col p-5">
            <label htmlFor="dropoffmonth" className="flex items-center gap-2">
              <AiOutlineCalendar className="text-orange-500" />
              Drop-off <span className="text-orange-500">*</span>
            </label>
            <input type="date" name="" id="dropoffmonth" />
          </div>
          <div className="flex gap-10 flex-col p-5">
            <button className="flex items-center justify-center gap-4 bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full lg:mt-0 hover:bg-orange-600 transition-all duration-200">
              Search
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

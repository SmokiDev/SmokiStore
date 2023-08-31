import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <div
      className="flex flex-col items-center lg:items-start justify-center lg:flex-row mt-20 lg:gap-20"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center max-w-sm text-center mt-10">
        <h2 className="uppercase font-bold text-2xl mb-4">
          Car <span className="normal-case font-normal text-lg">Rental</span>
        </h2>
        <p className="flex text-md mb-4">
          We offer a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </p>
        <p className="font-bold flex items-center m-2">
          <BsFillTelephoneFill className="mr-4" /> {"(123)-456-789"}
        </p>
        <p className="font-bold flex items-center m-2">
          <MdEmail className="mr-4" /> carrental@gmail.com
        </p>
      </div>
      <div className="flex flex-col items-center justify-center max-w-sm text-center mt-10">
        <h2 className="uppercase font-bold text-2xl">Company</h2>
        <p className="p-1">New York</p>
        <p className="p-1">Careers</p>
        <p className="p-1">Mobile</p>
        <p className="p-1">Blog</p>
        <p className="p-1">How we work</p>
      </div>
      <div className="flex flex-col items-center justify-center max-w-sm text-center mt-10">
        <h2 className="uppercase font-bold text-2xl">Working hours</h2>
        <p className="p-1">Mon - Fri:9:00AM - 9:00PM</p>
        <p className="p-1">Sat - 9:00AM - 19:00PM</p>
        <p className="p-1">Sun: Closed</p>
      </div>
      <div className="flex flex-col items-center justify-center max-w-sm text-center mt-10">
        <h2 className="uppercase font-bold text-2xl">Subscription</h2>
        <p className="p-1">
          Subcribe your email adress for latest news & updates.
        </p>
        <input type="text" placeholder="Enter Email Address" className="p-2" />
        <button className="bg-orange-500 px-20 py-2 text-white font-bold rounded-md my-5">
          Submit
        </button>
      </div>
    </div>
  );
}

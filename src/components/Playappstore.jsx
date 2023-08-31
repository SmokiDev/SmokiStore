import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineRight,
} from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import phone from "../images/phone.png";
import playappstore from "../images/playappstore.png";
export default function Playappstore() {
  return (
    <div className="lg:flex items-center justify-center px-10">
      <div className="flex flex-col px-10 items-center">
        <h2 className="font-bold my-8 text-3xl lg:text-4xl">
          Download our app to get most out of it
        </h2>
        <p className="text-1xl tracking-wide py-5 max-w-xl">
          You can download no-charge apps from Google Play or App Store on your
          Android or I-phone. We recommend that you get apps from Google Play,
          but you can also get them from other sources.
        </p>
        <img src={playappstore} className="w-96" />
      </div>
      <div className="relative flex flex-col items-center my-10 lg:p-20">
        <AiOutlineArrowLeft className="relative right-24" />
        <h2 className="font-bold text-md py-5">
          Find the plan that's right for you.
        </h2>
        <div>
          <div className="flex py-5">
            <p className="border-b-4 w-20 pl-4 border-orange-500">Monthly</p>
            <p className="ml-5 text-gray-400">6Months</p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-orange-500 rounded-lg text-white p-1 m-2">
          This plan includes "Full coverage" <AiOutlineRight />
        </div>
        <div className="pr-16">
          <h3 className="font-bold pt-5">Root premier</h3>
          <p className="text-gray-400">Hight levels of coverage</p>
        </div>
        <div className="flex items-center justify-center border-b-2 pb-1">
          <p className="font-bold pt-5">
            $258.50 <small>/mo</small>
          </p>
          <BsFillArrowRightCircleFill className="text-orange-500 ml-24 relative top-2" />
        </div>
        <img src={phone} className="w-96 absolute bottom-0 lg:top-4" />
      </div>
    </div>
  );
}

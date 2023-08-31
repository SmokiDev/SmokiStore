import { FaQuoteRight } from "react-icons/fa6";
import meAvatar from "../images/me-avatar.png";
import imageAvatar from "../images/image-avatar.png";

export default function Testimonials() {
  return (
    <div className="max-w-screen-2xl mx-auto" id="testimonials">
      <div className="text-center">
        <h3 className="font-bold text-3xl pt-32 pb-10">Reviewed by People</h3>
        <h2 className="font-bold my-8 text-3xl lg:text-5xl">
          Client's Testimonials
        </h2>
        <p className="text-2xl tracking-wide py-10 lg:px-96">
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and result, and they're eager to shere their positive experiences with
          you.
        </p>
      </div>
      <div className="text-center 2xl:flex">
        <div className="">
          <div className="py-5">
            <h3 className="text-2xl py-12 lg:px-40 font-bold">
              "We rented a car from this website and had an amazing experience!
              The booking was easy and rental rates were very affordable"
            </h3>
          </div>
          <div className="flex items-center justify-between px-12 lg:pl-56 mx-auto">
            <div className="flex items-center py-15 mt-10">
              <img src={meAvatar} className="me-avatar" />
              <div className="pl-10">
                <h3 className="font-bold text-1xl">Aleksa Ilic</h3>
                <p className="text-xl tracking-wider">Nis</p>
              </div>
            </div>
            <FaQuoteRight className="text-orange-500 text-8xl lg:mx-44" />
          </div>
        </div>
        <div>
          <div className="py-5">
            <h3 className="text-2xl py-12 lg:px-40 font-bold">
              "The car was in great condition and made our trip even better.
              Highly recommend for this car website!"
            </h3>
          </div>
          <div className="flex items-center justify-between px-12 lg:pl-56 mx-auto">
            <div className="flex items-center py-5 mt-10">
              <img src={imageAvatar} />
              <div className="pl-10">
                <h3 className="font-bold text-1xl">Theo Hughes</h3>
                <p className="text-xl tracking-wider">Belgrade</p>
              </div>
            </div>
            <FaQuoteRight className="text-orange-500 text-8xl lg:mx-44" />
          </div>
        </div>
      </div>
    </div>
  );
}

import { FaCarOn, FaCarSide } from "react-icons/fa6";
import { GiCharacter } from "react-icons/gi";

export default function About() {
  return (
    <>
      <div className="flex items-center p-4 max-w-screen-2xl mx-auto font-bold mt-16">
        <div className="grid mx-auto gap-10 p-10 mt-10">
          <h3 className="text-3xl mx-auto">Plan your trip now</h3>
          <h2 className="text-5xl">Qucik & easy car rental</h2>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 max-w-screen-2xl mx-auto font-bold mb-20">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-3 lg:place-items-center lg:py-10 text-center">
          <div className="text-orange-500 p-10 text-8xl mt-20">
            <FaCarOn className="mx-auto lg:order-1" />
          </div>
          <div className="flex gap-5 flex-col p-5 items-center lg:order-4">
            <h2 className="text-3xl">Select Car</h2>
            <p>
              We offer a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs
            </p>
          </div>
          <div className="text-orange-500 p-10 text-8xl mt-20">
            <GiCharacter className="mx-auto lg:order-2" />
          </div>
          <div className="flex gap-5 flex-col p-5 items-center lg:order-5">
            <h2 className="text-3xl">Contact Operator</h2>
            <p>
              Our knowledgeable and friendly operators are always ready to help
              with any question or concern
            </p>
          </div>
          <div className="text-orange-500 p-10 text-8xl mt-20">
            <FaCarSide className="mx-auto lg:order-3" />
          </div>
          <div className="flex gap-5 flex-col p-5 items-center lg:order-5">
            <h2 className="text-3xl">Let's Drive</h2>
            <p>
              Whather you're hitting the open road we've got you covered with
              our wide range of cars
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

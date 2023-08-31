import { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export default function Questions({ frequentquestions }) {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="max-w-screen-2xl lg:mx-auto py-32 mx-10">
      {frequentquestions.map((item, i) => (
        <div key={item.id}>
          <div
            onClick={() => toggle(i)}
            className="flex items-center justify-center font-bold text-xl py-8 hover:bg-orange-500 transition-all duration-200 rounded-3xl cursor-pointer"
          >
            {item.question}
            {selected === i ? (
              <AiOutlineUp className="ml-12" />
            ) : (
              <AiOutlineDown className="ml-12" />
            )}
          </div>
          <p
            className={
              selected === i
                ? "block text-center text-xl tracking-wider px-10 pt-5 pb-10"
                : "hidden"
            }
          >
            {item.answear}
          </p>
        </div>
      ))}
    </div>
  );
}

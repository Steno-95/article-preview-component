import { useState } from "react";
import CardShare from "./CardShare";

function CardFooter({ img, username, date }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <footer className={`${isClicked && "bg-(--gray-dark)"} flex px-6 py-4`}>
      {!isClicked && (
        <>
          <figure className="size-10 rounded-full overflow-hidden mr-4">
            <img
              src={`/images/avatar-${img}.jpg`}
              alt={`${img} photo`}
              className="w-full"
            />
          </figure>
          <div className="flex flex-col  ">
            <h2 className="text-[.8rem] text-(--gray-dark) font-bold">
              {username}
            </h2>
            <span className="text-(--gray-blue) text-[.8rem]">{date}</span>
          </div>
        </>
      )}
      {isClicked && <CardShare />}
      <button
        className="ml-auto size-8 bg-(--gray-light) rounded-full flex items-center justify-center "
        onClick={() => setIsClicked((click) => !click)}
      >
        <img src="/images/icon-share.svg" />
      </button>
    </footer>
  );
}

export default CardFooter;

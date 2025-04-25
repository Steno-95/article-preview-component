import { useState } from "react";
import CardShare from "./CardShare";

function CardFooter({ img, username, date }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <footer
      className={`${isClicked && "bg-(--gray-dark) "} flex py-4 px-6 lg:px-10`}
    >
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
        className={`ml-auto size-8  rounded-full flex items-center justify-center ${
          isClicked ? "bg-(--gray)" : "bg-(--gray-light)"
        }`}
        onClick={() => setIsClicked((click) => !click)}
      >
        {/* <img
          src="/images/icon-share.svg"
          className={isClicked && "filter-sepia-"}
        /> */}
        <div
          className={`mask-[url(/images/icon-share.svg)] mask-no-repeat mask-center size-8 ${
            isClicked ? "bg-white" : "bg-(--gray-blue)"
          }`}
        ></div>
      </button>
    </footer>
  );
}

export default CardFooter;

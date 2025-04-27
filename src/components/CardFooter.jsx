import { useState } from "react";
import CardShare from "./CardShare";
import useWindowDimensions from "../hooks/useWindowDimensions";

function CardFooter({ img, username, date }) {
  const [isClicked, setIsClicked] = useState(false);
  const { width } = useWindowDimensions();
  const isForMobile = isClicked && width < 1024;
  const isForDesktop = isClicked && width >= 1024;
  console.log(width);
  return (
    <footer
      className={`${
        isForMobile && "bg-(--gray-dark) "
      } flex py-4 px-6 lg:px-10 lg:relative`}
    >
      {(!isClicked || !isForMobile) && (
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
      {isForMobile && <CardShare />}
      {isForDesktop && <CardShare />}
      <div
        role="button"
        title="share"
        className={`ml-auto size-8  rounded-full flex items-center justify-center cursor-pointer ${
          isClicked ? "bg-(--gray)" : "bg-(--gray-light)"
        }`}
        onClick={() => setIsClicked((click) => !click)}
      >
        <span
          className={`mask-[url(/images/icon-share.svg)] mask-no-repeat mask-center size-8 ${
            isClicked ? "bg-white" : "bg-(--gray-blue) "
          }`}
        ></span>
      </div>
    </footer>
  );
}

export default CardFooter;

function CardPicture({ img }) {
  return (
    <figure className="max-h-[13rem] w-full overflow-hidden lg:max-h-[17rem] ">
      <img src={`/images/${img}.jpg`} alt={`${img} photo`} className="w-full" />
    </figure>
  );
}

export default CardPicture;

function CardPicture({ img }) {
  return (
    <figure className="h-[12rem] overflow-hidden w-full">
      <img src={`/images/${img}.jpg`} alt={`${img} photo`} className="w-full" />
    </figure>
  );
}

export default CardPicture;

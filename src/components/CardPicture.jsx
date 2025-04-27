function CardPicture({ img }) {
  return (
    <figure className="max-h-[13rem] w-full overflow-hidden lg:min-h-[18.5rem] lg:rounded-l-xl">
      <img
        src={`/images/${img}.jpg`}
        alt={`${img} photo`}
        className="w-full lg:scale-120 lg:ml-8"
      />
    </figure>
  );
}

export default CardPicture;

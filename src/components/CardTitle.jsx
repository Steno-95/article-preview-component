function CardTitle({ children }) {
  return (
    <h1 className="text-(--gray-dark) font-bold text-[1rem] tracking-tight px-6 pt-6 lg:text-[1.2rem] lg:px-10 lg:tracking-normal pb-4">
      {children}
    </h1>
  );
}

export default CardTitle;

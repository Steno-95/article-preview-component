function CardDescription({ children }) {
  return (
    <p className="text-(--gray-blue) text-[.8rem] px-6 pb-6 lg:text-[.9rem] lg:pb-0 lg:px-10">
      {children}
    </p>
  );
}

export default CardDescription;

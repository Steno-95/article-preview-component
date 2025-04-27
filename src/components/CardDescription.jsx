function CardDescription({ children }) {
  return (
    <p className="text-(--gray) text-[.8rem] px-6 pb-6 lg:text-[.9rem] lg:pb-0 lg:px-10 tracking-wide">
      {children}
    </p>
  );
}

export default CardDescription;

function Card({ children }) {
  return (
    <main className="rounded-xl shadow-xl bg-white max-w-[19rem] m-auto  overflow-hidden flex flex-col">
      {children}
    </main>
  );
}

export default Card;

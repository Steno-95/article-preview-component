function Card({ children }) {
  return (
    <main className="rounded-xl shadow-xl bg-white max-w-[19rem] m-auto  overflow-hidden flex flex-col lg:flex-row lg:max-w-[52rem] lg:max-h-[20rem]">
      {children}
    </main>
  );
}

export default Card;

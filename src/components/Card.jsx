function Card({ children }) {
  return (
    <main className="rounded-xl shadow-xl bg-white max-w-[19rem] m-auto  overflow-hidden lg:overflow-visible flex flex-col lg:flex-row lg:max-w-[52rem]">
      {children}
    </main>
  );
}

export default Card;

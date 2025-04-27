function CardShare() {
  return (
    <div className="flex items-center gap-4 h-10 lg:absolute -top-10 -right-12 lg:bg-(--gray-dark) lg:p-5 lg:rounded-md lg:shadow-xl lg:animate-fade-in-scale popup z-[1]">
      <span className="text-(--gray) text-[.8rem] tracking-[.3em] font-medium">
        SHARE
      </span>
      <img src="/images/icon-facebook.svg" className="size-5" />
      <img src="/images/icon-twitter.svg" className="size-5" />
      <img src="/images/icon-pinterest.svg" className="size-5" />
    </div>
  );
}

export default CardShare;

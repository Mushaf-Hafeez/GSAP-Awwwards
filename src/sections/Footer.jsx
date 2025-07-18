const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative min-h-screen w-full bg-[#000] text-milk"
    >
      <div className="h-full w-full">
        <img
          src="/images/slider-dip.png"
          alt="dip-img"
          className="absolute z-40 inset-0"
        />
        <video
          muted
          playsInline
          autoPlay
          className="absolute bottom-0 right-0 h-[80vh] z-20 object-cover"
        >
          <source src="/videos/splash.mp4" />
        </video>
        {/* content */}
        <div className="h-full w-full absolute z-30 left-0 top-1/2">
          <h1 className="text-8xl font-bold text-center">#CHUGRESPONSIBLY</h1>
          {/* social links */}
          <div className="flex items-center justify-center gap-4 mt-20">
            <div className="size-20 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
              <img src="/images/insta.svg" alt="insta-img" />
            </div>
            <div className="size-20 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
              <img src="/images/yt.svg" alt="yt-img" />
            </div>
            <div className="size-20 flex items-center justify-center rounded-full border-2 border-black cursor-pointer">
              <img src="/images/tiktok.svg" alt="tiktok-img" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

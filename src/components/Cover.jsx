export default function Cover() {
  return (
    <div className="w-full relative">
      <img
        src="assets/cover.jpg"
        className=" w-full h-90 sm:h-200 object-cover object-top-right brightness-80"
        alt=""
      />
      <div className="absolute bottom-0 w-full h-full flex flex-row items-center justify-end">
        <div className="max-w-7xl p-2 m-auto w-full pt-30 sm:pt-50 text-right text-4xl sm:text-6xl flex flex-col gap-2 sm:gap-7 mix-blend-plus-lighter text-white/60 text-shadow-md/5">
          <div className="font-semibold"><span className="text-base sm:text-xl font-thin">Find your</span> <span className="uppercase font-semibold">style</span></div>
          <div className="font-semibold"><span className="text-base sm:text-xl font-thin">Find your</span> <span className="uppercase">happiness</span></div>
          <div className="align-text-top"><span className="text-base sm:text-xl align-text-top font-light tracking-tighter">{`: )`}</span></div>
        </div>
      </div>
    </div>
  );
}

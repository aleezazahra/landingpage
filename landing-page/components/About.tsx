import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  return (
    <section className="bg-[#270c03] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-white font-extrabold text-3xl md:text-4xl mb-6">
              About{" "}
              <span className={`${pacifico.className} text-[#a76453]`}>
                Us
              </span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              We started this place in 2018 because the coffee near campus
              wasn't doing it for us. So we got our own machine, figured out
              roasting through a lot of trial and error, and opened up shop
              down the street.
            </p>
            <p className="text-white/60 leading-relaxed">
              Beans get roasted in small batches every week. Nothing sits
              around long enough to go stale. If you're working, studying,
              or just need somewhere quiet to sit, you're welcome to stay as
              long as you want.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border border-[#5c2e25] rounded-xl p-6">
              <p className="text-white text-2xl font-bold">2018</p>
              <p className="text-white/50 text-sm mt-1">Since</p>
            </div>
            <div className="border border-[#5c2e25] rounded-xl p-6">
              <p className="text-white text-2xl font-bold">3</p>
              <p className="text-white/50 text-sm mt-1">Locations</p>
            </div>
            <div className=" border border-[#5c2e25] rounded-xl p-6">
              <p className="text-white text-2xl font-bold">12</p>
              <p className="text-white/50 text-sm mt-1">Roasters</p>
            </div>
            <div className=" border border-[#5c2e25] rounded-xl p-6">
              <p className="text-white text-2xl font-bold">7am</p>
              <p className="text-white/50 text-sm mt-1">Open daily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
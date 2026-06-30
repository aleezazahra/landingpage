import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

const menu = [
  {
    name: "Espresso",
    desc: "Double shot, strong and quick",
    price: "$3.00",
    img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Cappuccino",
    desc: "Espresso with steamed milk foam",
    price: "$4.50",
    img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Latte",
    desc: "Smooth and milky, lightly sweet",
    price: "$4.50",
    img: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Cold Brew",
    desc: "Slow steeped, served over ice",
    price: "$5.00",
    img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Americano",
    desc: "Espresso topped with hot water",
    price: "$3.50",
    img: "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=500&q=80&auto=format&fit=crop",
  },
  {
    name: "Mocha",
    desc: "Espresso, chocolate, steamed milk",
    price: "$5.00",
    img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=500&q=80&auto=format&fit=crop",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-[#270c03] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-white font-extrabold text-3xl md:text-4xl">
            Our{" "}
            <span className={`${pacifico.className} text-[#a76453]`}>
              Menu
            </span>
          </h2>
          <p className="text-white/60 mt-3 max-w-md mx-auto">
            A few favorites, made fresh every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map((item) => (
            <div
              key={item.name}
              className="bg-[#3a1810] border border-[#5c2e25] rounded-xl overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {item.name}
                  </h3>
                  <p className="text-white/50 text-sm mt-1">{item.desc}</p>
                </div>
                <span className="text-[#c98a76] font-semibold whitespace-nowrap ml-4">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
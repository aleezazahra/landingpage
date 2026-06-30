import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

const reviews = [
  {
    name: "Sara M.",
    text: "Good coffee, quiet spot to work. I come here most mornings before class.",
  },
  {
    name: "Daniel K.",
    text: "Cold brew is the best in the area. Staff remembers my order now.",
  },
  {
    name: "Priya R.",
    text: "Simple menu but everything on it is solid. Never had a bad cup here.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#270c03] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white font-extrabold text-3xl md:text-4xl text-center mb-12">
          What People{" "}
          <span className={`${pacifico.className} text-[#a76453]`}>Say</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="] border border-[#5c2e25] rounded-xl p-6"
            >
              <p className="text-white/70 leading-relaxed">{review.text}</p>
              <p className="text-white font-semibold mt-4">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
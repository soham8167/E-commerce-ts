import combo1 from "../assets/images/combo.jpg";
import combo2 from "../assets/images/combo1.jpg";
import combo3 from "../assets/images/combo2.jpeg";

const comboImages = [combo1, combo2, combo3];

const Combos = () => {
  return (
    <div className="pt-32 px-4 max-w-6xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6 text-[#5E8E2D]">
        Combo Packs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {comboImages.map((img, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl p-4 text-center mt-2"
          >
            <img
              src={img}
              alt={`Combo ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg"
            />

            <h3 className="font-semibold mt-4">
              Healthy Combo {index + 1}
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Fruits + Veggies bundle
            </p>

            <button className="mt-4 bg-[#5E8E2D] text-white px-4 py-2 rounded">
              View Combo
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Combos;

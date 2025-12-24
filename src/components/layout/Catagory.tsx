import p1 from "../../assets/images/bestseller.png";
import p2 from "../../assets/images/exotic 1.png";
import p3 from "../../assets/images/fruit 1.png";
import p4 from "../../assets/images/greens 1.png";
import p5 from "../../assets/images/ready-cook 1.png";
import p6 from "../../assets/images/ready-eat 1.png";
import p7 from "../../assets/images/cabbage 1.png";

interface CatagoryData {
  img: string;
  title: string;
}
const allData: CatagoryData[] = [
  {
    img: p1,
    title: "Hello",
  },
  {
    img: p2,
    title: "Hello",
  },
  {
    img: p3,
    title: "Hello",
  },
  {
    img: p4,
    title: "Hello",
  },
  {
    img: p5,
    title: "Hello",
  },
  {
    img: p6,
    title: "Hello",
  },
  {
    img: p7,
    title: "Hello",
  },
];

const Catagory = () => {
  return (
    <div className="flex justify-center items-center w-full ">
      <div className="flex items-center py-6 px-10 gap-10 bg-[#81C157]  rounded-3xl">
        {allData.map((item) => (
          <div>
            <div className="p-2 rounded-full  bg-black/5">
              <div className=" flex flex-col gap-5 bg-white rounded-full p-6 ">
                <img src={item.img} alt="" />
              </div>
            </div>
            <div className=" text-center ">{item.title}</div>
            
          </div>
        ))}

      </div>

    </div>
  );
};

export default Catagory;

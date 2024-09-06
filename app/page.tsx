import Image from "next/image";
import screenShot0 from "@/assets/screenShot0.png";


export default function Home() {
  return (
    <>
      <section className="bg-black pt-10">
        <div className="">
          <div className="container">
            {/* mobile Slider */}
            <h1 className="text-[#AAAAAA] text-center">How does it <span className="font-bold text-white">Work</span><span className="text-[#459BFF]">?</span></h1>

            <Image src={screenShot0} alt="PropertyCard"  />
          </div>
        </div>
      </section>
    </>
  );
}


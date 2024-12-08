import Image from "next/image";
import Slider1 from "./slider1";
import GearUp from "./slider2";
import Slider3 from "./slider3";

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section Title */}
      <div className="bg-slate-100 w-full top-0 left-0 z-10 mt-[120px] py-4">
        {/* Container for Hero Content */}
        <div className="flex flex-col items-center justify-center h-auto">
          {/* Title */}
          <h1 className="text-[25px] font-bold">Hello Nike App</h1>
          
          {/* Description */}
          <p className="text-center text-sm mt-2 max-w-[600px] leading-relaxed">
            Download the app to access everything Nike.
            <span className="font-semibold underline underline-offset-2">
              Get Your Great.
            </span>
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        {/* Adjust the image margin-top based on header size */}
        <Image
          src="/hero.png" // Add the path to your image here
          alt="Nike App Visual" // Provide a description of the image
          width={1400} // Adjust the width based on your requirements
          height={1000} // Adjust the height based on your requirements
        />
      </div>
      
      <div className="flex flex-col items-center justify-center py-8 bg-white">
        <h3 className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
          First Look
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold text-black px-4 py-2">
          NIKE AIR MAX PULSE
        </h1>
        <p className="text-gray-700 text-center mt-4 mb-6 max-w-xl">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse—designed to push you past your limits and help you go to the max.
        </p>
        <div className="flex gap-4">
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800">
            Notify Me
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800">
            Shop Air Max
          </button>
        </div>
      </div>

<Slider1/>
<div>
<h1 className="mx-[50px] text-[20px] font-bold">FEATURED</h1>
<Image
src="/feature.png"
alt="feature"
width={1400}
height={1200}
className="mx-[50px] mt-[10px] mb-[10px]"/>
</div>
<section className="flex flex-col items-center justify-center text-center py-16 bg-white">
      <h1 className="text-4xl font-bold mb-4">STEP INTO WHAT FEELS GOOD</h1>
      <p className="text-gray-600 mb-6">
        Cause everyone should know the feeling of running in that perfect pair.
      </p>
      <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
        Find Your Shoe
      </button>
    </section>
    
    <GearUp/>
    <div>
        <h1 className="text-xl font-semibold mb-6 ml-[45px]">Do not Miss</h1>
        <Image
        src = "/dont.png"
        alt = "Wait"
        width={1400}
        height={1200}
        className="ml-[55px]"/>
    </div>
    <section className="flex flex-col items-center justify-center text-center py-16 bg-white">
      <h1 className="text-4xl font-bold mb-4">FLIGHT ESSENTIALS</h1>
      <p className="text-gray-600 mb-6">
        Your built-to-last, all-week-wears-but style only Jordan Brand can deliver.
      </p>
      <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
        Shop
      </button>
    </section>
    <Slider3/>
    </div>
  );
};

export default HeroSection;

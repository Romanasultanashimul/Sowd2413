import React from 'react';
import sofa from '../assets/sofa.png';

const UniqueFeature = () => {
  return (
    <section className="bg-[#F1F0FF] flex-center justify-center items-center py-12">
      <div className="container mx-auto flex items-center justify-center gap-10 flex-wrap">
        {/* Sofa Image */}
        <div className="w-1/2 flex justify-center">
          <img src={sofa} alt="BlueSofa" className="w-[80%] max-w-[400px]" />
        </div>

        {/* Text Section */}
        <div className="w-1/2 max-w-[450px] text-center">
          <h2 className="text-[30px] font-bold text-[#151875] pb-5 font-jsans">
            Unique Features Of Latest & Trending Products
          </h2>
          <ul className="font-lato text-left">
            {[
              {
                text: "All frames constructed with hardwood solids and laminates",
                color: "#F52B70",
              },
              {
                text: "Reinforced with double wood dowels, glue, screw-nails, corner blocks, and machine nails",
                color: "#2B2BF5",
              },
              {
                text: "Arms, backs, and seats are structurally reinforced",
                color: "#2BF5CC",
              },
            ].map((item, index) => (
              <li
                key={index}
                className="text-[16px] font-medium text-[#ACABC3] mb-4 relative pl-6"
              >
                <span
                  className="absolute left-0 top-2 h-[10px] w-[10px] rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                {item.text}
              </li>
            ))}
          </ul>

          {/* CTA Section */}
          <div className="flex justify-center items-center gap-6 mt-6">
            <button className="text-[17px] font-medium text-[#FFF] px-6 py-2 bg-[#FB2E86] font-jsans">
              Add To Cart
            </button>
            <div>
              <h5 className="text-[17px] font-medium text-[#151875] font-jsans">
                B&B Italian Sofa
              </h5>
              <h6 className="text-[17px] font-normal text-[#151875]">$32.00</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueFeature;

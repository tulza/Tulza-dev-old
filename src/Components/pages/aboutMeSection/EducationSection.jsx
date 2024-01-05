import React from "react";
import { OtagoPolyLogo, UoaLogo } from "../../svg/ImageImport";

const EducationSection = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* university */}
      <div className=" flex h-[125px] justify-between">
        <div className=" flex w-full flex-col justify-between leading-[1rem]">
          <p className="mb-1 text-base">Studying at</p>
          <p className="text-xl font-bold text-blue">University of Auckland</p>
          <p className="text-xl">
            Computer Science <span className="font-bold">(Bsc)</span>
          </p>
          <p className="text-sm">2nd year Undergraduate</p>
          <hr className="mr-4 mt-4" />
        </div>
        <img src={UoaLogo} className="aspect-auto h-full" />
      </div>
      {/* item */}
      {/* <div>
        <div className="grid w-full grid-flow-col justify-evenly">
          <div className="aspect-square w-[100px] bg-white"></div>
          <div className="aspect-square w-[100px] bg-white"></div>
          <div className="aspect-square w-[100px] bg-white"></div>
          <div className="aspect-square w-[100px] bg-white"></div>
        </div>
        <hr className="mt-4" />
      </div> */}
      {/* gamejam */}
      <div className="flex h-[125px] gap-4">
        <img src={OtagoPolyLogo} className="aspect-auto h-full" />
        <div>
          <p className="text-base font-bold text-green">Otago Polytechnic</p>
          <p className="text-xl font-bold">GameJam Participant 2022</p>
          <p className="text-sm">
            Working with as team of 4 during a 48 hour event to create a game
            with Unity and C# where i create UI assets and design stage layout
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;

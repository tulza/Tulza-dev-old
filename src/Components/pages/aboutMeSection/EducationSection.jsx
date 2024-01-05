import React from "react";
import { OtagoPolyLogo, UoaLogo } from "../../svg/ImageImport";

const EducationSection = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* university */}
      <div className="mb-4 flex h-[100px] justify-between">
        <div className="mb-4 w-full">
          <p>Studying at</p>
          <p>University of Auckland</p>
          <p>Computer Science (Bsc)</p>
          <p>2nd year Undergraduate</p>
          <hr className="mr-4 mt-4" />
        </div>
        <img src={UoaLogo} className="aspect-auto h-full" />
      </div>
      {/* item */}
      <div>
        <div className="grid w-full grid-flow-col justify-evenly">
          <div className="aspect-square w-[100px] bg-white"></div>
          <div className="aspect-square w-[100px] bg-white"></div>
          <div className="aspect-square w-[100px] bg-white"></div>
          <div className="aspect-square w-[100px] bg-white"></div>
        </div>
        <hr className="mt-4" />
      </div>
      {/* gamejam */}
      <div className="flex h-[100px] gap-4">
        <img src={OtagoPolyLogo} className="aspect-auto h-full" />
        <div>
          <p>Game Jam Participant 2022</p>
          <p>Otago Polytechnic</p>
          <span>
            Working with as team of 4 during a 48 hour event to create a game
            with Unity and C# where i create UI assets and design stage layout
          </span>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;

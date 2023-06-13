import React from 'react';

const colors = ['bg-yellow-400', 'bg-green-600', 'bg-blue-600', 'bg-red-600'];
const cardArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+2', ''];

const Cards = () => (
  <div className="grid grid-cols-5 gap-5 justify-center items-center ">
    {colors.map((color) =>
      cardArr.map((card) => (
        <div
          key={card}
          className="w-[220px] h-[300px] bg-white text-white rounded-xl text-5xl font-bold p-[6px]"
        >
          <div
            className={`w-full h-full rounded-xl ${color} p-1 flex relative`}
          >
            <div className="absolute left-2 top-0">{card}</div>
            <div>
              {card !== '+2' && (
                <div className="absolute right-[40%] bottom-[40%] text-[80px]">
                  {card}
                </div>
              )}
              {card === '+2' && (
                <div className="">
                  <div className="w-[50px] h-[80px] absolute right-[40%] bottom-[40%] bg-white rounded drop-shadow-xl"></div>
                  <div className="w-[50px] h-[80px] absolute right-[50%] bottom-[30%] bg-white rounded drop-shadow-xl"></div>
                </div>
              )}
            </div>
            <div className="h-[280px] w-[150px] border-[5px] rotate-[40deg] border-white rounded-[50%] ml-[24px]"></div>
            <div className="absolute right-2 bottom-0">{card}</div>
          </div>
        </div>
      ))
    )}
  </div>
);

export default Cards;

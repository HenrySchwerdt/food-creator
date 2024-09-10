import React from "react";
import { MenuDayView } from "./day"; // Importing the previously created component
import { type MenuDay, type WeekMenu } from "~/server/domain/types";

interface Props {
  weekMenu: WeekMenu
}

const daysMap: Record<number, string> = {
  0: "sun", // Sunday
  1: "mon", // Monday
  2: "tue", // Tuesday
  3: "wen", // Wednesday
  4: "thu", // Thursday
  5: "fri", // Friday
  6: "sat"  // Saturday
};

export const WeekMenuView = ({ weekMenu }: Props) => {
  const currentDay = new Date().getDay(); // 0 for Sunday, 1 for Monday, etc.
  const currentDayKey = daysMap[currentDay];

  const dayNames: Record<string, string> = {
    mon: "Montag",
    tue: "Dienstag",
    wen: "Mittwoch",
    thu: "Donnerstag",
    fri: "Freitag",
    sat: "Samstag",
    sun: "Sonntag"
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Wochenmenü</h1>
      
      <div className="grid gap-6">
        {Object.keys(weekMenu).map((dayKey) => (
          <div key={dayKey} className={`transition duration-300 transform ${
            dayKey === currentDayKey ? "bg-green-100 scale-105 border border-green-500" : "bg-white"
          } rounded-lg shadow-lg`}>
            <MenuDayView 
              day={dayNames[dayKey]!} 
              menu={weekMenu[dayKey]! as MenuDay} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

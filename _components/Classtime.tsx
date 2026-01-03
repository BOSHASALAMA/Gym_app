"use client";

import { useState } from "react";

type FilterType =
  | "ALL CLASS"
  | "CROSSFIT"
  | "LUNGE BALL"
  | "PPSR"
  | "WALLS"
  | "CANDY";

interface ClassSchedule {
  time: string;
  class: string;
  category: FilterType;
}

interface ScheduleData {
  [key: string]: ClassSchedule[];
}

export default function GymSchedule() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("ALL CLASS");

  const filters: FilterType[] = [
    "ALL CLASS",
    "CROSSFIT",
    "LUNGE BALL",
    "PPSR",
    "WALLS",
    "CANDY",
  ];

  const scheduleData: ScheduleData = {
    MONDAY: [
      { time: "10.00 - 14.00", class: "CROSSFIT LV1", category: "CROSSFIT" },
      {
        time: "16.00 - 18.00",
        class: "LUNGE BALL BUR",
        category: "LUNGE BALL",
      },
      { time: "18.00 - 20.00", class: "WALLS TO KNEES", category: "WALLS" },
      {
        time: "21.00 - 23.00",
        class: "LUNGE BALL BUR",
        category: "LUNGE BALL",
      },
    ],
    TUESDAY: [
      {
        time: "14.00 - 17.00",
        class: "LUNGE BALL BUR",
        category: "LUNGE BALL",
      },
      { time: "18.00 - 20.00", class: "PPSR", category: "PPSR" },
      { time: "20.00 - 22.00", class: "WALLS TO KNEES", category: "WALLS" },
    ],
    WEDNESDAY: [
      { time: "10.00 - 15.00", class: "CROSSFIT LV1", category: "CROSSFIT" },
      { time: "16.00 - 19.00", class: "CANDY", category: "CANDY" },
      { time: "20.30 - 23.00", class: "WALLS TO KNEES", category: "WALLS" },
    ],
    THURSDAY: [
      { time: "14.00 - 17.00", class: "CROSSFIT LV1", category: "CROSSFIT" },
      { time: "18.00 - 22.00", class: "CHELSEA", category: "CROSSFIT" },
    ],
    FRIDAY: [
      {
        time: "10.00 - 13.00",
        class: "LUNGE BALL BUR",
        category: "LUNGE BALL",
      },
      { time: "16.00 - 19.00", class: "CANDY", category: "CANDY" },
      { time: "22.00 - 23.00", class: "CROSSFIT LV2", category: "CROSSFIT" },
    ],
    SATURDAY: [
      { time: "14.00 - 15.30", class: "WALLS TO KNEES", category: "WALLS" },
      { time: "16.00 - 17.00", class: "PPSR", category: "PPSR" },
      { time: "18.00 - 22.00", class: "ANNIE", category: "CROSSFIT" },
    ],
    SUNDAY: [
      {
        time: "10.00 - 13.30",
        class: "LUNGE BALL BUR",
        category: "LUNGE BALL",
      },
      { time: "16.00 - 20.00", class: "MURPH", category: "CROSSFIT" },
      { time: "21.00 - 23.00", class: "CROSSFIT LV2", category: "CROSSFIT" },
    ],
  };

  const timeSlots: string[] = ["10.00", "14.00", "16.00", "18.00", "20.00"];
  const days: string[] = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];

  const filterClasses = (classes: ClassSchedule[]): ClassSchedule[] => {
    if (activeFilter === "ALL CLASS") return classes;
    return classes.filter((c) => c.category === activeFilter);
  };

  return (
    <div className="min-h-screen  text-white p-4 md:p-8 bg-linear-to-r from-black via-red-500/35  to-black">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`text-xs md:text-sm font-bold tracking-wider transition-colors pb-2 whitespace-nowrap ${
              activeFilter === filter
                ? "text-[#ff4444] border-b-2 border-[#ff4444]"
                : "text-white hover:text-[#ff4444]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Desktop Schedule Grid */}
      <div className="hidden lg:block bg-[#252525] rounded-lg overflow-hidden">
        {/* Header Row */}
        <div className="grid grid-cols-8 border-b border-[#333]">
          <div className="p-4"></div>
          {days.map((day) => (
            <div key={day} className="p-4 text-center font-bold text-sm">
              {day}
            </div>
          ))}
        </div>

        {/* Time Slots */}
        {timeSlots.map((time) => (
          <div key={time} className="grid grid-cols-8 border-b border-[#333] ">
            <div className="p-6 font-bold text-lg border-r border-[#333]">
              {time}
            </div>
            {days.map((day) => {
              const dayClasses = filterClasses(scheduleData[day] || []);
              const classInSlot = dayClasses.find((c) =>
                c.time.startsWith(time)
              );

              return (
                <div key={day} className="p-4 border-r border-[#333]">
                  {classInSlot && (
                    <div className="text-center">
                      <div className="text-xs text-gray-400 mb-1">
                        {classInSlot.time}
                      </div>
                      <div className="text-[#ff4444] font-bold text-sm">
                        {classInSlot.class}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Mobile/Tablet Schedule - Day by Day */}
      <div className="lg:hidden space-y-6">
        {days.map((day) => {
          const dayClasses = filterClasses(scheduleData[day] || []);

          if (dayClasses.length === 0) return null;

          return (
            <div key={day} className="bg-[#252525] rounded-lg overflow-hidden">
              <div className="bg-[#2a2a2a] p-4 font-bold text-center border-b border-[#333]">
                {day}
              </div>
              <div className="divide-y divide-[#333]">
                {dayClasses.map((classItem, idx) => (
                  <div
                    key={idx}
                    className="p-4 flex items-center justify-between"
                  >
                    <div className="text-gray-400 text-sm font-medium">
                      {classItem.time}
                    </div>
                    <div className="text-[#ff4444] font-bold text-sm">
                      {classItem.class}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

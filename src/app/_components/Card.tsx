"use client";
import { useState } from "react";
import { type MenuDay } from "~/server/domain/types";
interface CardProps {
  menu: MenuDay;
  day: string;
}
export function Card({ menu, day }: CardProps) {
  const [showLunch, setShowLunch] = useState(false);
  const [showDinner, setShowDinner] = useState(false);

  const today =
    new Date().toLocaleDateString("de-DE", { weekday: "long" }) === day;

  return (
    <div className="rounded-lg bg-card shadow-lg">
      <div
        className={`flex items-center justify-between rounded-t-lg px-6 py-4 text-secondary-foreground ${today ? "bg-gray-500" : "bg-gray-300"}`}
      >
        <h2
          className={`text-2xl font-bold ${today ? "text-white" : "text-gray-600"}`}
        >
          {day}
        </h2>
      </div>
      <div className="space-y-8 px-6 py-8">
        <div>
          <div className="grid gap-4">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="mb-4 text-xl font-bold">
                  Mittag: <span className="font-light">{menu.lunch.name}</span>{" "}
                </h3>
                <button
                  className="text-secondary-foreground hover:text-secondary focus:outline-none"
                  onClick={() => setShowLunch(!showLunch)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <hr />
              {showLunch && (
                <div className="grid gap-2 py-2">
                  <div>
                    <h5 className="mb-1 text-base font-medium">Zutaten:</h5>
                    <ul className="list-disc space-y-1 pl-4">
                      {menu.lunch.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="mb-1 text-base font-medium">Zubereitung:</h5>
                    <ol className="list-decimal space-y-1 pl-4">
                      {menu.lunch.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="grid gap-4">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="mb-4 text-xl font-bold">
                  Abend: <span className="font-light">{menu.dinner.name}</span>{" "}
                </h3>
                <button
                  className="text-secondary-foreground hover:text-secondary focus:outline-none"
                  onClick={() => setShowDinner(!showDinner)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
              <hr />
              {showDinner && (
                <div className="grid gap-2 py-2">
                  <div>
                    <h5 className="mb-1 text-base font-medium">Zutaten:</h5>
                    <ul className="list-disc space-y-1 pl-4">
                      {menu.dinner.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="mb-1 text-base font-medium">Zubereitung:</h5>
                    <ol className="list-decimal space-y-1 pl-4">
                      {menu.dinner.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

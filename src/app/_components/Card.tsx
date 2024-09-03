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

    const today = new Date().toLocaleDateString('de-DE', { weekday: 'long' }) === day;


    return <div className="bg-card rounded-lg shadow-lg">
        <div className={`text-secondary-foreground px-6 py-4 rounded-t-lg flex justify-between items-center ${today ? 'bg-gray-500' : 'bg-gray-300'}`}>
            <h2 className={`text-2xl font-bold ${today ? 'text-white': 'text-gray-600'}`}>{day}</h2>
        </div>
        <div className="px-6 py-8 space-y-8">
            <div>
                <div className="grid gap-4">
                    <div>
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-bold mb-4">Mittag: <span className="font-light">{menu.lunch.name}</span> </h3>
                            <button className="text-secondary-foreground hover:text-secondary focus:outline-none" onClick={() => setShowLunch(!showLunch)}>
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
                                    className="w-6 h-6"
                                >
                                    <path d="m6 9 6 6 6-6"></path>
                                </svg>
                            </button>
                        </div>
                        <hr />
                        {showLunch && (
                            <div className="grid gap-2 py-2">
                                <div>
                                    <h5 className="text-base font-medium mb-1">Zutaten:</h5>
                                    <ul className="list-disc pl-4 space-y-1">
                                        {menu.lunch.ingredients.map((ingredient, index) => (
                                            <li key={index}>{ingredient}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-base font-medium mb-1">Zubereitung:</h5>
                                    <ol className="list-decimal pl-4 space-y-1">
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
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-bold mb-4">Abend: <span className="font-light">{menu.dinner.name}</span> </h3>
                            <button className="text-secondary-foreground hover:text-secondary focus:outline-none" onClick={() => setShowDinner(!showDinner)}>
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
                                    className="w-6 h-6"
                                >
                                    <path d="m6 9 6 6 6-6"></path>
                                </svg>
                            </button>
                        </div>
                        <hr />
                        {showDinner && (
                            <div className="grid gap-2 py-2">
                                <div>
                                    <h5 className="text-base font-medium mb-1">Zutaten:</h5>
                                    <ul className="list-disc pl-4 space-y-1">
                                        {menu.dinner.ingredients.map((ingredient, index) => (
                                            <li key={index}>{ingredient}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-base font-medium mb-1">Zubereitung:</h5>
                                    <ol className="list-decimal pl-4 space-y-1">
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
}
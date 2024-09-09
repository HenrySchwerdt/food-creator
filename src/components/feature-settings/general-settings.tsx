"use client";

import { useState } from "react";
import { Separator } from "../ui/separator";
import { Switch } from "../ui/switch";
import { Slider } from "../ui/slider";

interface Data {
    includeDiscounts: boolean;
    people: number;
    budget: number;
}

interface Props {
    title: string;
    description: string;
    data: Data;
    onChange: (data: Data) => void;
}

export function GeneralSettings({ title, description, data, onChange }: Props) {
    const [includeDiscounts, setIncludeDiscounts] = useState(data.includeDiscounts);
    const [people, setPeople] = useState(data.people);
    const [budget, setBudget] = useState(data.budget);

    const updateData = () => {
        const newData = { includeDiscounts, people, budget };
        if (JSON.stringify(data) !== JSON.stringify(newData)) {
            onChange(newData);
        }
    };

    const onIncludeDiscountsChange = (value: boolean) => {
        setIncludeDiscounts(value);
        updateData();
    };

    const onPeopleChange = (value: number) => {
        setPeople(value);
        updateData();
    };

    const onBudgetChange = (value: number) => {
        setBudget(value);
        updateData();
    };

    return (
        <div className="shadow-md rounded-md p-5 bg-white max-w-xl">
            <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
            <p className="text-sm font-light text-gray-500 mt-2">{description}</p>
            <Separator className="my-4" />

            {/* People Slider */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-gray-800 mb-2 sm:mb-0">Personen</h2>
                <div className="flex gap-4 items-center w-full sm:w-2/3">
                    <Slider
                        defaultValue={[people]}
                        value={[people]}
                        onValueChange={([value]) => onPeopleChange(value!)}
                        max={6}
                        step={1}
                        className="w-full"
                    />
                    <div className="text-gray-600 text-sm">{people}</div>
                </div>
            </div>

            {/* Budget Slider */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-gray-800 mb-2 sm:mb-0">Budget</h2>
                <div className="flex gap-4 items-center w-full sm:w-2/3">
                    <Slider
                        defaultValue={[budget]}
                        value={[budget]}
                        onValueChange={([value]) => onBudgetChange(value!)}
                        max={200}
                        step={1}
                        className="w-full"
                    />
                    <div className="text-gray-600 text-sm">€{budget}</div>
                </div>
            </div>

            {/* Include Discounts Switch */}
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <h2 className="text-lg font-medium text-gray-800 mb-2 sm:mb-0">Rabatte einbeziehen</h2>
                <Switch checked={includeDiscounts} onCheckedChange={onIncludeDiscountsChange} />
            </div>
        </div>
    );
}

"use client";
import { useState } from "react";
import { Separator } from "../ui/separator";
import { Switch } from "../ui/switch";
import { Slider } from "../ui/slider";
import { cn } from "~/lib/utils";

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
        if (data !== newData && data !== newData) {
            onChange(newData);
        }
    }

    const onIncludeDiscountsChange = (value: boolean) => {
        setIncludeDiscounts(value);
        updateData();
    }

    const onPeopleChange = (value: number) => {
        setPeople(value);
        updateData();
    }

    const onBudgetChange = (value: number) => {
        setBudget(value);
        updateData();
    }

    return <div className="shadow-md rounded-md p-5 bg-white">
        <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        <p className="text-sm font-light text-gray-400 mt-4">{description}</p>
        <Separator className="my-4" />
        <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Personen</h2>
            <div className="flex gap-2 items-center">
            <Slider defaultValue={[2]}
                value={[people]}
                onValueChange={([value]) => onPeopleChange(value!)}
                max={6}
                step={1}
                className={cn("w-[60%]")} />
            <div className="text-gray-600">{people} Personen</div>
            </div>
        </div>
        <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Budget</h2>
            <div className="flex gap-2 items-center">
                <Slider defaultValue={[2]}
                    value={[budget]}
                    onValueChange={([value]) => onBudgetChange(value!)}
                    max={200}
                    step={1}
                    className={cn("w-[60%]")} />
                <div className="text-gray-600">€{budget}</div>
            </div>
        </div>
        <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Rabatte einbeziehen</h2>
            <Switch checked={includeDiscounts} onCheckedChange={onIncludeDiscountsChange} />
        </div>
    </div>
}
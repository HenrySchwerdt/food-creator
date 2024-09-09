"use client";
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

    const updateData = (includeDiscounts: boolean, people: number, budget: number) => {
        const newData = { includeDiscounts, people, budget };
        if (JSON.stringify(data) !== JSON.stringify(newData)) {
            onChange(newData);
        }
    };


    return (
        <div className="shadow-md rounded-md p-5 bg-white">
            <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
            <p className="text-sm font-light text-gray-500 mt-2">{description}</p>
            <Separator className="my-4" />

            {/* People Slider */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-gray-800 mb-2 sm:mb-0">Personen</h2>
                <div className="flex gap-4 items-center w-full sm:w-2/3">
                    <Slider
                        defaultValue={[data.people]}
                        value={[data.people]}
                        onValueChange={([value]) => updateData(data.includeDiscounts, value!, data.budget)}
                        max={6}
                        step={1}
                        className="w-full"
                    />
                    <div className="text-gray-600 text-sm">{data.people}</div>
                </div>
            </div>

            {/* Budget Slider */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-gray-800 mb-2 sm:mb-0">Budget</h2>
                <div className="flex gap-4 items-center w-full sm:w-2/3">
                    <Slider
                        defaultValue={[data.budget]}
                        value={[data.budget]}
                        onValueChange={([value]) => updateData(data.includeDiscounts, data.people, value!)}
                        max={200}
                        step={1}
                        className="w-full"
                    />
                    <div className="text-gray-600 text-sm">€{data.budget}</div>
                </div>
            </div>

            {/* Include Discounts Switch */}
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <h2 className="text-lg font-medium text-gray-800 mb-2 sm:mb-0">Rabatte einbeziehen</h2>
                <Switch checked={data.includeDiscounts} onCheckedChange={(value) => updateData(value, data.people, data.budget)} />
            </div>
        </div>
    );
}

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"; // shadcn components
import { Separator } from "../ui/separator"; // shadcn component for line separators
import { type MenuDay } from "~/server/domain/types";

interface Props {
  day: string;
  menu: MenuDay;
}

export const MenuDayView = ({ day, menu }: Props) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        {day}
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Lunch Section */}
        <Card className="rounded-lg bg-white p-6 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-900">
              Mittagessen: {menu.lunch.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-sm text-gray-600">
              <strong>Kalorien:</strong> {menu.lunch.caloriesPerPersion} kcal
            </p>
            <Separator className="my-4" />

            <div>
              <h4 className="text-lg font-medium text-gray-800">Zutaten</h4>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                {menu.lunch.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-700">
                    {ingredient.quantity} {ingredient.unit} {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>

            <Separator className="my-4" />

            <div>
              <h4 className="text-lg font-medium text-gray-800">Zubereitung</h4>
              <ol className="ml-6 mt-2 list-decimal space-y-1">
                {menu.lunch.steps.map((step, index) => (
                  <li key={index} className="text-gray-700">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Dinner Section */}
        <Card className="rounded-lg bg-white p-6 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-900">
              Abendessen: {menu.dinner.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-sm text-gray-600">
              <strong>Kalorien:</strong> {menu.dinner.caloriesPerPersion} kcal
            </p>
            <Separator className="my-4" />

            <div>
              <h4 className="text-lg font-medium text-gray-800">Zutaten</h4>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                {menu.dinner.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-700">
                    {ingredient.quantity} {ingredient.unit} {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>

            <Separator className="my-4" />

            <div>
              <h4 className="text-lg font-medium text-gray-800">Zubereitung</h4>
              <ol className="ml-6 mt-2 list-decimal space-y-1">
                {menu.dinner.steps.map((step, index) => (
                  <li key={index} className="text-gray-700">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

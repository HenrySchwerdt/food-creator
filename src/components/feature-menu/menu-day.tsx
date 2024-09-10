import { type MenuDay } from "~/server/domain/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";

interface Props {
  day: string;
  menu: MenuDay;
}

export const MenuDayView = ({ day, menu }: Props) => {
  return (
    <Card className="rounded">
      <CardHeader className="bg-slate-300">
        <CardTitle className="text-xl">{day}</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion className="mt-4" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">
              Mittag: {menu.lunch.name}
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2 py-2">
                <div>
                  <h5 className="mb-1 text-base font-medium">Zutaten:</h5>
                  <ul className="list-disc space-y-1 pl-4">
                    {menu.lunch.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient.name}</li>
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion className="mt-4" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">
              Abend: {menu.dinner.name}
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-2 py-2">
                <div>
                  <h5 className="mb-1 text-base font-medium">Zutaten:</h5>
                  <ul className="list-disc space-y-1 pl-4">
                    {menu.dinner.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient.name}</li>
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

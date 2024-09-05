

import { MenuDay } from "~/server/domain/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";

interface Props {
    day: string;
    menu: MenuDay;
}

export const MenuDayView = ({ day, menu }: Props) => {
    return (
        <Card className="rounded bg-stone-100">
            <CardHeader className=" bg-secondary">
                <CardTitle className="text-xl">{day}</CardTitle>
            </CardHeader>
            <CardContent >
                <Accordion className="mt-4" type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg">Mittag: {menu.lunch.name}</AccordionTrigger>
                        <AccordionContent>
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
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion className="mt-4" type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg">Abend: {menu.dinner.name}</AccordionTrigger>
                        <AccordionContent>
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
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
        </Card>
    )
};
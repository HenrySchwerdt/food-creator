"use client";
import { useState } from "react";
import { EditableList } from "./editable-list";

export function Settings() {
    const [favoriteMeals, setFavoriteMeals] = useState<string[]>([]);
    const [favoriteIngredients, setFavoriteIngredients] = useState<string[]>([]);
    const [dislikedIngredients, setDislikedIngredients] = useState<string[]>([]);
    const [dietaryPreferences, setDietaryPreferences] = useState<string[]>([]);
    const [allergies, setAllergies] = useState<string[]>([]);
    return (
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <EditableList 
                items={favoriteIngredients} 
                onUpdate={setFavoriteIngredients} 
                itemLimit={20} 
                title="Favorisierte Lebensmittel" 
                description="Hier ist es möglich eine Liste der Zutaten zu spezifizieren, welche gerne gegessen werden und deshalb auch öfter in den Gerichten vorkommen sollen. Maximal können 20 Zutaten angegeben werden. (Eier, Eisbergsalat)"
            />
            <EditableList 
                items={dislikedIngredients} 
                onUpdate={setDislikedIngredients} 
                itemLimit={20} 
                title="Nicht-Favorisierte Lebensmittel" 
                description="Hier ist es möglich eine Liste der Zutaten anzugeben, welche nicht gemocht werden. Maximal können 20 Zutaten angegeben werden. (Eier, Eisbergsalat)" 
            />
            <EditableList 
                items={favoriteMeals} 
                onUpdate={setFavoriteMeals} 
                itemLimit={5} 
                title="Favorisierte Gerichte" 
                description="Hier ist es möglich eine Liste der Gerichte anzugeben, welche gerne gegessen werden und deshalb auch öfter als Gericht im Menü stehen sollen. (Pikantes Hünchen)" 
            />
            <EditableList 
                items={dietaryPreferences} 
                onUpdate={setDietaryPreferences} 
                itemLimit={3} 
                title="Diätetische Vorlieben" 
                description="Hier können Angaben gemacht werden zur Diät. (vegetarisch, 1 mal die Woche Fleisch, vegan)" 
            />
            <EditableList 
                items={allergies} 
                onUpdate={setAllergies} 
                title="Allergien" 
                itemLimit={5} 
                description="Hier können Angaben zu den jeweiligen Allergien gemacht werden, damit Lebensmittel, die diese Stoffe beinhalten, nicht in das Wochenmenü gelangen." 
            />
        </div>
    );
}
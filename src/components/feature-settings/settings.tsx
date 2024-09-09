"use client";
import { useState } from "react";
import { EditableList } from "./editable-list";
import { GeneralSettings } from "./general-settings";
import { User } from "~/server/domain/types";

interface Props {
    user : User | null;
}

export function Settings({user} : Props) {
    const [changed, setChanged] = useState(false);
    const [favoriteMeals, setFavoriteMeals] = useState<string[]>(user?.favoriteMeals ?? []);
    const [favoriteIngredients, setFavoriteIngredients] = useState<string[]>(user?.likedIngredients ?? []);
    const [dislikedIngredients, setDislikedIngredients] = useState<string[]>(user?.unlikeIngredients ?? []);
    const [dietaryPreferences, setDietaryPreferences] = useState<string[]>(user?.dietaryPreferences ?? []);
    const [allergies, setAllergies] = useState<string[]>(user?.dietaryPreferences ?? []);
    const [kitchenEquiment, setKitchenEquipment] = useState<string[]>(user?.kitchenEquipment ?? []);
    const [includeDiscounts, setIncludeDiscounts] = useState<boolean>(user?.includeDiscounts ?? false);
    const [people, setPeople] = useState(user?.people ?? 1);
    const [budget, setBudget] = useState(user?.budget ?? 40);
    
    const onGeneralSettingsChange = (data: {includeDiscounts: boolean; people: number; budget: number;}) => {
        setIncludeDiscounts(data.includeDiscounts);
        setPeople(data.people);
        setBudget(data.budget);
        setChanged(true);
    }

    const onFavoriteMealsChange = (items: string[]) => {
        setFavoriteMeals(items);
        setChanged(true);
    }
    const onFavoriteIngredientsChange = (items: string[]) => {
        setFavoriteIngredients(items);
        setChanged(true);
    }
    const onDislikedIngredientsChange = (items: string[]) => {
        setDislikedIngredients(items);
        setChanged(true);
    }
    const onDietaryPreferencesChange = (items: string[]) => {
        setDietaryPreferences(items);
        setChanged(true);
    }
    const onAllergiesChange = (items: string[]) => {
        setAllergies(items);
        setChanged(true);
    }

    const updateData = () => {
        const update: User = {
            id: user?.id ?? "",
            includeDiscounts,
            people,
            budget,
            favoriteMeals,
            likedIngredients: favoriteIngredients,
            unlikeIngredients: dislikedIngredients,
            dietaryPreferences,
            kitchenEquipment: kitchenEquiment,
            allergies
        };
       if (!user) {
            fetch("/api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(update),
            }).then(() => {
                setChanged(false);
            }).catch((error) => {
                alert("Fehler beim Speichern der Daten");
            })
       } else {
            fetch("/api/user/"+user?.id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(update),
            }).then(() => {
                setChanged(false);
            }).catch((error) => {
                alert("Fehler beim Speichern der Daten");
            });
       }
    }


    return (
        <div className="pt-4">
            <GeneralSettings title="Allgemeine Einstellungen" description="Hier können allgemeine Einstellungen vorgenommen werden zum Budget, den Personen im Haushalt und dem inkludieren der Rabatte." data={{includeDiscounts: includeDiscounts, people: people, budget: budget}} onChange={onGeneralSettingsChange} />
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-4">
                <EditableList
                    items={favoriteIngredients}
                    onUpdate={onFavoriteIngredientsChange}
                    itemLimit={20}
                    title="Favorisierte Lebensmittel"
                    description="Hier ist es möglich eine Liste der Zutaten zu spezifizieren, welche gerne gegessen werden und deshalb auch öfter in den Gerichten vorkommen sollen. Maximal können 20 Zutaten angegeben werden. (Eier, Eisbergsalat)"
                />
                <EditableList
                    items={dislikedIngredients}
                    onUpdate={onDislikedIngredientsChange}
                    itemLimit={20}
                    title="Nicht-Favorisierte Lebensmittel"
                    description="Hier ist es möglich eine Liste der Zutaten anzugeben, welche nicht gemocht werden. Maximal können 20 Zutaten angegeben werden. (Eier, Eisbergsalat)"
                />
                <EditableList
                    items={favoriteMeals}
                    onUpdate={onFavoriteMealsChange}
                    itemLimit={5}
                    title="Favorisierte Gerichte"
                    description="Hier ist es möglich eine Liste der Gerichte anzugeben, welche gerne gegessen werden und deshalb auch öfter als Gericht im Menü stehen sollen. (Pikantes Hünchen)"
                />
                <EditableList
                    items={dietaryPreferences}
                    onUpdate={onDietaryPreferencesChange}
                    itemLimit={3}
                    title="Diätetische Vorlieben"
                    description="Hier können Angaben gemacht werden zur Diät. (vegetarisch, 1 mal die Woche Fleisch, vegan)"
                />
                <EditableList
                    items={allergies}
                    onUpdate={onAllergiesChange}
                    title="Allergien"
                    itemLimit={5}
                    description="Hier können Angaben zu den jeweiligen Allergien gemacht werden, damit Lebensmittel, die diese Stoffe beinhalten, nicht in das Wochenmenü gelangen."
                />
                 <EditableList
                    items={allergies}
                    onUpdate={onAllergiesChange}
                    title="Allergien"
                    itemLimit={5}
                    description="Hier können Angaben zu den jeweiligen Allergien gemacht werden, damit Lebensmittel, die diese Stoffe beinhalten, nicht in das Wochenmenü gelangen."
                />
                <EditableList
                    items={kitchenEquiment}
                    itemLimit={10}
                    onUpdate={setKitchenEquipment}
                    title="Küchenausstattung"
                    description="Hier können Angaben zur Küchenausstattung gemacht werden, damit Rezepte, die spezielle Geräte benötigen, nicht in das Wochenmenü gelangen."
                />
                {changed && <button onClick={updateData} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Speichern</button>}
            </div>
        </div>
    );
}
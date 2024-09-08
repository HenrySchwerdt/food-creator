# Features

FoodCreator ist eine Web und Mobile App mit der man Ernährung für die Woche mit der Hilfe von AI planen kann.
Sie soll einem beim planen des wöchentlichem Einkaufs unterstützen. Dabei soll ein Wochenernährungsplan erstellt werden und
eine Einkaufsliste generiert werden. Wichtig ist, dass die App für Mobile optimiert sein soll.

# Pages

## MenuPage

Auf der Menupage sollen die Gerichte angezeigt werden die für die Woche ausgesucht wurden. Zusätzlich soll eine Einkaufsliste dargestellt werden.
(Es ist aber auch möglich die Einkaufsliste in einen seperaten Tab zu packen). Ein Wochenmenu hat folgende Felder kann jedoch bei bedarf erweitert werden.

```json
{
    "mon": {
        "lunch": {
            "name": "Name des Gerichts",
            "ingredients" [
                {
                    "name": "Name der Zutat",
                    "amount": "Messeineinheit z.B. Gramm, Kilogramm, Dose oder Loeffel",
                    "cals": "Schaetzung der Kalorien",
                },
                {
                    "name": "Name der Zutat",
                    "amount": "Messeineinheit z.B. Gramm, Kilogramm, Dose oder Loeffel",
                    "cals": "Schaetzung der Kalorien",
                }
            ],
            "steps": [
                "Zubereitungsschritt 1",
                "Zubereitungsschritt 1",
            ]
        },
        "dinner": {
             "name": "Name des Gerichts",
            "ingredients" [
                {
                    "name": "Name der Zutat",
                    "amount": "Messeineinheit z.B. Gramm, Kilogramm, Dose oder Loeffel",
                    "cals": "Schaetzung der Kalorien",
                },
                {
                    "name": "Name der Zutat",
                    "amount": "Messeineinheit z.B. Gramm, Kilogramm, Dose oder Loeffel",
                    "cals": "Schaetzung der Kalorien",
                }
            ],
            "steps": [
                "Zubereitungsschritt 1",
                "Zubereitungsschritt 1",
            ]
        }
    },
    "tue": {},
    "wed": {},
    "thu": {},
    "fri": {},
    "sat": {},
    "sun": {}
}
```

- Wichtig ist des es eine moderne UI, die gut zum Thema Essen passt und Spaß macht zu bedienen.

- Es sollten auch möglich sein, über einen Button ein neues 7 Tage Menu zu generieren oder nur einzelne neu zu generieren.

- Bei der Generierung eines neuen Menus soll noch eine Prompt in die UI, bei der man in 200 Zeichen sagen kann, was am letzten Menu gestoert hat

- Auch soll es möglich sein Gerichte manuell anzupassen und ohne ai indem man einfach auf eine Seite kommt, auf der man den Gerichtnamen ändern kann und und die Zutaten und Zubereitungsschritte anpassen kann

# Einkaufslisten Seite

Es soll eine Einkaufsliste dargestellt werden, welche folgende Inhalte hat:

```json
{
  "items": [
    {
      "name": "Name des Items",
      "quantity": 2,
      "metric": "Gramm",
      "price": 2.99
    }
  ]
}
```

# User Settings page

Auf der User Page soll es möglich sein Änderungen vorzunehmen zu den AI Einstellungen. Werte die verändert werden können sind:

```json
{
  "budget": 40.0,
  "favoriteMeals": ["Nudeln mit Tomatensosse"],
  "kitchenEquipment": ["Herd"],
  "dietaryPreferences": ["vegan", "viel Protein", "etc"],
  "allergies": "Allergien",
  "unlikeIngredients": ["Apfel"],
  "likedIngredients": ["Tomaten"],
  "people": 2
}
```

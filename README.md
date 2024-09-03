# Food-Creator

Food-Creator is a small utility vercel project written in T3. It is a service that scrapes the discounts from aldi and lidl and then asks chatgpt to 
combine them into one menu for the week. This helps me not thinking about what I need to cook and budgets my expenses. 

# Architecture
There is one cron github action that scrapes the weekly discounts from aldi and lidl and stores them into the products collection. Then these products are used to create a openai api call that generates the dishes from the discounted products. On the website you can access your shoppinglist and the dishes for every day for the next week.

# Deploy your own
You can deploy your own food-creator.

1. Create an open-api key
2. Fork this repository
3. Create a Vercel Account and add your fork to the deployments
4. Create a vercel postgres instance
5. Add the following Env Variabels to Vercel:
```sh
# Drizzle
POSTGRES_URL="***"
POSTGRES_PRISMA_URL="***"
POSTGRES_URL_NO_SSL="***"
POSTGRES_URL_NON_POOLING="***"
POSTGRES_USER="***"
POSTGRES_HOST="***"
POSTGRES_PASSWORD="***"
POSTGRES_DATABASE="***"

REFRESH_MENU_SECRET="***" # Should be the same as github secret
REFRESH_PRODUCT_SECRET="***" # Should be the same as github secret
```
You can find these under the vercel storage section
6. Create following Github Secrets
```sh
OPEN_AI_SECRET_KEY="***"
REFRESH_MENU_SECRET="***" # Should be the same as vercel secret
REFRESH_MENU_URL="***"
REFRESH_PRODUCT_SECRET="***" # Should be the same as vercel secret
REFRESH_PRODUCT_URL="***"
WEEKLY_COST="***"
```
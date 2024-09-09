"server only";
import { db } from "~/server/db";
import { type User } from "../domain/types";
import { user } from "../db/schema";
import { eq } from "drizzle-orm";

export const updateUser = async (update: User): Promise<void> => {
  await db
    .update(user)
    .set({
      budget: update.budget,
      favoriteMeals: update.favoriteMeals,
      kitchenEquipment: update.kitchenEquipment,
      dietaryPreferences: update.dietaryPreferences,
      allergies: update.allergies,
      unlikeIngredients: update.unlikeIngredients,
      likedIngredients: update.likedIngredients,
      includeDiscounts: update.includeDiscounts,
      people: update.people,
    })
    .where(eq(user.id, update.id)).execute();
};

export const insertUser = async (newUser: User): Promise<void> => {
  await db
    .insert(user)
    .values({
      id: newUser.id,
      budget: newUser.budget,
      favoriteMeals: newUser.favoriteMeals,
      kitchenEquipment: newUser.kitchenEquipment,
      dietaryPreferences: newUser.dietaryPreferences,
      allergies: newUser.allergies,
      unlikeIngredients: newUser.unlikeIngredients,
      likedIngredients: newUser.likedIngredients,
      includeDiscounts: newUser.includeDiscounts,
      people: newUser.people,
    })
    .execute();
}

export const getUser = async (id: string): Promise<User | undefined> => {
  const identifiedUser: User | undefined = await db.query.user.findFirst({
    where: (item, { eq }) => eq(item.id, id),
  });
  return identifiedUser;
};

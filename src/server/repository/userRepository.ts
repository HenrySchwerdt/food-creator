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
      people: update.people,
    })
    .where(eq(user.id, update.id));
};

export const getUser = async (id: string): Promise<User | undefined> => {
  const identifiedUser: User | undefined = await db.query.user.findFirst({
    where: (item, { eq }) => eq(item.id, id),
  });
  return identifiedUser;
};

export const getUserByEmail = async (
  email: string,
): Promise<User | undefined> => {
  const identifiedUser: User | undefined = await db.query.user.findFirst({
    where: (item, { eq }) => eq(item.email, email),
  });
  return identifiedUser;
};

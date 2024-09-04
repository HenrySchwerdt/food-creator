import { getAllWeekMenus } from "~/server/repository/menuRepository";
import { Card } from "../_components/Card";
export const dynamic = "force-dynamic";
export default async function HomePage() {
  const menuWeek = (await getAllWeekMenus())[0];
  return (
    <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card menu={menuWeek!.mon} day="Montag" />
        <Card menu={menuWeek!.tue} day="Dienstag" />
        <Card menu={menuWeek!.wen} day="Mittwoch" />
        <Card menu={menuWeek!.thu} day="Donnerstag" />
        <Card menu={menuWeek!.fri} day="Freitag" />
        <Card menu={menuWeek!.sat} day="Samstag" />
        <Card menu={menuWeek!.sun} day="Sonntag" />
      </div>
    </main>
  );
}

import Link from "next/link";
import { getAllWeekMenus } from "~/server/repository/menuRepository";
import { DayMenu } from "./_components/DayMenu";

export default async function HomePage() {
  const menuWeek = (await getAllWeekMenus())[0];
  return (
    <main className="flex min-h-screen flex-col py-3 px-10">
      <DayMenu menu={menuWeek!.mon} day="Montag" />
      <DayMenu menu={menuWeek!.tue} day="Dienstag" />
      <DayMenu menu={menuWeek!.wen} day="Mittwoch" />
      <DayMenu menu={menuWeek!.thu} day="Donnerstag" />
      <DayMenu menu={menuWeek!.fri} day="Freitag" />
      <DayMenu menu={menuWeek!.sat} day="Samstag" />
      <DayMenu menu={menuWeek!.sun} day="Sonntag" />        
    </main>
  );
}

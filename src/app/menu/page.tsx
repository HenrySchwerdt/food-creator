import { getAllWeekMenus } from "~/server/repository/menuRepository";
import { NavBar } from "~/components/feature-common/navbar";
import { MenuDayView } from "~/components/feature-menu/menu-day";
import { ShoppingList } from "~/components/feature-menu/shopping-list";
export const dynamic = "force-dynamic";
export default async function HomePage() {
  const menuWeek = (await getAllWeekMenus())[0];
  const today = new Date().toLocaleDateString('en-EN', { weekday: 'short' });
  const todayDE = new Date().toLocaleDateString('de-DE', { weekday: 'long' });
  let todyMenu;
  switch (today) {
    case 'Mon':
      todyMenu = menuWeek!.mon;
      break;
    case 'Tue':
      todyMenu = menuWeek!.tue;
      break;
    case 'Wed':
      todyMenu = menuWeek!.wen;
      break;
    case 'Thu':
      todyMenu = menuWeek!.thu;
      break;
    case 'Fri':
      todyMenu = menuWeek!.fri;
      break;
    case 'Sat':
      todyMenu = menuWeek!.sat;
      break;
    case 'Sun':
      todyMenu = menuWeek!.sun;
      break;
    default:
      break;
  }

  return (
    <main className="flex flex-col min-h-[100dvh]" >
      <NavBar />
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-5">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-4">
            <MenuDayView menu={todyMenu!} day={todayDE} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

            {today != 'Mon' && <MenuDayView menu={menuWeek!.mon} day="Montag" />}
            {today != 'Tue' && <MenuDayView menu={menuWeek!.tue} day="Dienstag" />}
            {today != 'Wed' && <MenuDayView menu={menuWeek!.wen} day="Mittwoch" />}
            {today != 'Thu' && <MenuDayView menu={menuWeek!.thu} day="Donnerstag" />}
            {today != 'Fri' && <MenuDayView menu={menuWeek!.fri} day="Freitag" />}
            {today != 'Sat' && <MenuDayView menu={menuWeek!.sat} day="Samstag" />}
            {today != 'Sun' &&<MenuDayView menu={menuWeek!.sun} day="Sonntag" />}
          </div>
          </div>
          
          <ShoppingList list={menuWeek?.list!} />
        </div>

      </div>
    </main>
  );
}

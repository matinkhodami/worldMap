import { Map } from "../components/app/map";
import { Sidebar } from "../components/app/sidebar";

export default function AppLayout() {
  return (
    <main className="flex gap-4 min-h-screen bg-background p-3 h-[calc(100vh-24px)]">
      <Sidebar />
      <Map />
    </main>
  );
}

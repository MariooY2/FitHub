import SideBar from "./_components/SideBar";

export const metadata = {
  title: "Dashboard",
};
export const revalidate = 10;

export default function RootLayout({ children }) {
  return (
    <div className="flex min-h-screen overflow-hidden">
      <SideBar />
      <main className="flex-1 overflow-y-auto h-screen">{children}</main>
    </div>
  );
}

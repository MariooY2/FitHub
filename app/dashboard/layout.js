
import SideBar from "./_components/SideBar";
export const metadata = {
  title: "Dashboard",
 
};

export default function RootLayout({ children }) {
  return (
    <div className="flex min-h-screen">
     <SideBar/>
      <main className="flex-1 p-5">
        {children}
      </main>
    </div>
  );
}
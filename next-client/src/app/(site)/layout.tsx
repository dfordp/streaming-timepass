import Sidebar from "@/components/common/Sidebar";
import TopBar from "@/components/common/TopBar";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row">
      <div>
        <Sidebar/>
      </div>
      <div className="flex flex-col">
        <div>
          <TopBar/>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}

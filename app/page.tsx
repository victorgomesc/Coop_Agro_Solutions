import Baner from "@/components/Baner";
import BusinessDescription from "@/components/BusinessDescription";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center justify-center bg-zinc-200">
        <Header />
        <Navbar />
      </div>
      
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col">
          <Baner />
          <BusinessDescription />
        </div>
      </div>
      
    </div>
  );
}

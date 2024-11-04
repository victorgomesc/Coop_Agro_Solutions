import Baner from "@/components/Baner";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen sm:p-10">
      <div className="flex flex-col items-center justify-center">
        <Header />
        <Navbar />
      </div>
      
      <div className="flex">
        <Sidebar />
        <Baner />
      </div>
      
    </div>
  );
}

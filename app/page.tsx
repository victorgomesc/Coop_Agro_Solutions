import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen sm:p-10">
      <Header />
      <Navbar />
    </div>
  );
}

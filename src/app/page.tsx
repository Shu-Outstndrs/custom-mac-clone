import { HomeApp } from "@/components/home/HomeApp";
import { GetData } from "@/components/home/getData";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen">
      <h1 className="w-screen text-center text-4xl mt-16">こんにちは</h1>
      <GetData />
    </main>
  );
}

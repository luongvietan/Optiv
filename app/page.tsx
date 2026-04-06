import { Header } from "@/components/landing/header/Header";
import { LandingPage } from "@/components/landing";

export default function Home() {
  return (
    <div className="flex min-h-full w-full flex-1 flex-col bg-white">
      <Header />
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col">
        <LandingPage />
      </div>
    </div>
  );
}

import { Header } from "@/components/landing/header/Header";
import { LandingPage } from "@/components/landing";

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full min-w-0 flex-1 flex-col overflow-x-clip bg-white">
      <Header />
      <div className="mx-auto flex w-full min-w-0 max-w-7xl flex-1 flex-col">
        <LandingPage />
      </div>
    </div>
  );
}

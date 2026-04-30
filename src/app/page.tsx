import {
  HomeBanner,
  HomeContact,
  HomeCount,
  HomeNews,
  HomeValue,
} from "@/components/sections/home";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HomeBanner />
      <HomeValue />
      <HomeCount />
      <HomeNews />
      <HomeContact />
    </div>
  );
}

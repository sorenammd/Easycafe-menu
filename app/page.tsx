import BottomNav from "@/components/BottomNav";
import Categories from "@/components/Categories";
import HomeHeader from "@/components/HomeHeader";
import PopularList from "@/components/PopularList";
import PromoBanner from "@/components/PromoBanner";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden overflow-y-visible">

      <section className="relative mx-auto flex min-h-230 w-full max-w-110 flex-col overflow-visible rounded-[40px] bg-[linear-gradient(180deg,rgba(14,14,14,0.98)_0%,rgba(7,7,7,0.99)_100%)] shadow-[0_40px_120px_rgba(0,0,0,0.6)] ring-1 ring-white/6">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
          <div className="absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_top,rgba(255,166,77,0.2),transparent_70%)]" />
          <div className="absolute -right-14 top-24 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute -left-12 bottom-36 h-48 w-48 rounded-full bg-orange-300/8 blur-3xl" />
        </div>



        <div className="relative flex flex-1 flex-col gap-6 pb-24">
          <HomeHeader />
          <PromoBanner />
          <Categories />
          <PopularList />
        </div>

        <BottomNav />
      </section>
    </main>
  );
}

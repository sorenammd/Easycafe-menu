import BottomNav from "@/components/BottomNav";
import { brand } from "@/components/easycafe-data";
import Image from "next/image";

export default function EventsPage() {
    const events = [
        {
            id: "mafia",
            title: "مافیا",
            blurb: "بازی اجتماعی و مهیج در فضای کافه",
            date: "به‌زودی",
            howTo: "به‌زودی",
        },
    ];

    return (
        <main className="relative isolate min-h-screen overflow-hidden px-4 py-6 sm:px-6 sm:py-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(255,140,33,0.2),_transparent_68%)]" />
            <div className="pointer-events-none absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-500/12 blur-3xl" />

            <section className="relative mx-auto flex min-h-[100vh] w-full max-w-[440px] flex-col overflow-hidden rounded-[40px] border border-orange-500/20 bg-[linear-gradient(180deg,rgba(14,14,14,0.98)_0%,rgba(7,7,7,0.99)_100%)] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.6)] ring-1 ring-white/6">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_top,_rgba(255,166,77,0.2),_transparent_70%)]" />
                <div className="pointer-events-none absolute -right-14 top-24 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />

                <div className="relative flex flex-1 flex-col gap-6 pb-28">
                    <header className="flex items-center gap-3 px-1 pt-3">
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[22px] border border-orange-500/24 bg-[#131313] shadow-[0_18px_36px_rgba(255,106,0,0.16)] ring-1 ring-white/6">
                            <Image src="/logo.png" alt="لوگوی Easycafe" fill priority sizes="64px" className="object-cover" />
                        </div>
                        <div className="leading-tight">
                            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-orange-300/72">
                                رویدادها
                            </p>
                            <h1 className="mt-1 text-[1.55rem] font-extrabold tracking-tighter text-white">
                                ایونت‌ها
                            </h1>
                            <p className="mt-2 text-sm text-white/54">رویدادها و نشست‌های ویژه در کافه</p>
                        </div>
                    </header>

                    <div className="grid gap-4">
                        {events.map((ev) => (
                            <article key={ev.id} className="rounded-[18px] border border-white/8 bg-[#0f0f0f] p-4 shadow-[0_18px_36px_rgba(0,0,0,0.24)]">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{ev.title}</h3>
                                        <p className="mt-1 text-sm text-white/60">{ev.blurb}</p>
                                    </div>
                                    <div className="min-w-[64px] text-right">
                                        <p className="text-sm font-semibold text-orange-300/90">{ev.date}</p>
                                        <p className="mt-1 text-xs text-white/54">محل: {brand.name}</p>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center justify-between gap-3">
                                    <p className="text-sm text-white/70">روش شرکت: <span className="font-semibold text-white">{ev.howTo}</span></p>
                                    <button disabled className="rounded-md bg-orange-500/12 px-3 py-2 text-sm font-semibold text-orange-300/84 ring-1 ring-white/6">اطلاعات بیشتر</button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <BottomNav />
            </section>
        </main>
    );
}

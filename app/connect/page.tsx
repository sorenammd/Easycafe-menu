import BottomNav from "@/components/BottomNav";
import { brand } from "@/components/easycafe-data";
import Image from "next/image";

const connectItems = [
    {
        label: "اینستاگرام",
        value: `@${brand.handle}`,
        href: `https://instagram.com/${brand.handle}`,
        note: "برای دیدن استوری‌ها و آپدیت‌های کافه",
    },
    {
        label: "شماره تماس",
        value: brand.phone,
        href: `tel:${brand.phone}`,
        note: "برای هماهنگی، رزرو و ارتباط مستقیم",
    },
    {
        label: "آدرس",
        value: brand.address,
        href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(brand.address)}`,
        note: "بلوار کردستان، نزدیک پل مردوخ",
    },
] as const;

export default function ConnectPage() {
    return (
        <main className="relative isolate min-h-screen overflow-hidden px-4 py-6 sm:px-6 sm:py-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(255,140,33,0.2),_transparent_68%)]" />
            <div className="pointer-events-none absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-500/12 blur-3xl" />

            <section className="relative mx-auto flex min-h-[920px] w-full max-w-[440px] flex-col overflow-hidden rounded-[40px] border border-orange-500/20 bg-[linear-gradient(180deg,rgba(14,14,14,0.98)_0%,rgba(7,7,7,0.99)_100%)] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.6)] ring-1 ring-white/6">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_top,_rgba(255,166,77,0.2),_transparent_70%)]" />
                <div className="pointer-events-none absolute -right-14 top-24 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />

                <div className="relative flex flex-1 flex-col gap-6 pb-28">
                    <header className="flex items-center gap-3 px-1 pt-3">
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[22px] border border-orange-500/24 bg-[#131313] shadow-[0_18px_36px_rgba(255,106,0,0.16)] ring-1 ring-white/6">
                            <Image
                                src="/logo.png"
                                alt="لوگوی Easycafe"
                                fill
                                priority
                                sizes="64px"
                                className="object-cover"
                            />
                        </div>
                        <div className="leading-tight">
                            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-orange-300/72">
                                {brand.name}
                            </p>
                            <h1 className="mt-1 text-[1.55rem] font-extrabold tracking-tighter text-white">
                                ارتباط باما
                            </h1>
                        </div>
                    </header>

                    <div className="relative aspect-[16/10] overflow-hidden rounded-[34px] border border-orange-500/20 bg-[#0d0d0d] shadow-[0_26px_60px_rgba(0,0,0,0.4)]">
                        <Image
                            src="/banner.png"
                            alt="بنر Easycafe"
                            fill
                            priority
                            sizes="(max-width: 640px) 100vw, 420px"
                            className="object-cover opacity-55"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.68)_100%)]" />
                        <div className="absolute inset-x-0 bottom-0 p-5">
                            <p className="text-[0.72rem] font-semibold tracking-[0.3em] text-orange-200/82">
                                EASYCAFE
                            </p>
                        </div>
                    </div>

                    <section className="space-y-4">
                        {connectItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                                className="flex items-start justify-between gap-4 rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-4 py-4 shadow-[0_18px_36px_rgba(0,0,0,0.2)]"
                            >
                                <div className="min-w-0 flex-1">
                                    <p className="text-[0.72rem] font-semibold tracking-[0.24em] text-orange-300/72">
                                        {item.label}
                                    </p>
                                    <p className="mt-2 text-base font-semibold leading-7 text-white">
                                        {item.value}
                                    </p>
                                    <p className="mt-1 text-sm leading-6 text-white/54">{item.note}</p>
                                </div>
                                <span style={{ opacity: '0.4' }} className="grid place-content-center rounded-xl  min-h-10
                                px-3 py-1 text-sm font-semibold
                                 text-orange-100/88">
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        stroke="#f5f4f4">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M21 9.00001L21 3.00001M21 3.00001H15M21 3.00001L12 12M10 
                                        3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 
                                        6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976
                                         21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14" stroke="#fffafa" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </g>
                                    </svg>
                                </span>
                            </a>
                        ))}
                    </section>
                </div>

                <BottomNav />
            </section>
        </main>
    );
}
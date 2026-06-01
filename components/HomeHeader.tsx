import Image from "next/image";
import { brand } from "./easycafe-data";

export default function HomeHeader() {
  return (
    <header id="top" className="px-1 pt-3">
      <div className="flex min-w-0 items-center gap-3">
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
        <div className="min-w-0 leading-tight">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-orange-300/72">
            {brand.name}
          </p>
          <h1 className="mt-1 text-[1.55rem] font-extrabold tracking-tighter text-white">
            کافه رستوران ایزی
          </h1>
        </div>
      </div>
    </header>
  );
}

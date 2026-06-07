import Image from "next/image";

export default function PromoBanner() {
  return (
    <section id="hero" className="mt-1">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] border border-orange-500/20 bg-[#0d0d0d] shadow-[0_26px_60px_rgba(0,0,0,0.4)]">
        <Image
          src="/Easycafe-menu/banner.png"
          alt="بنر Easycafe"
          fill
          priority
          sizes="(max-width: 640px) 100vw, 420px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.14)_0%,rgba(0,0,0,0.34)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent_0%,rgba(255,140,33,0.16)_100%)]" />
      </div>
    </section>
  );
}

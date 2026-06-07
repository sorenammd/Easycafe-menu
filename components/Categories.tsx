"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { menuSections } from "./easycafe-data";

type SectionId = (typeof menuSections)[number]["id"];

const SECTION_CARD_SHELLS = [
  "bg-[linear-gradient(180deg,rgba(255,140,33,0.16),rgba(255,140,33,0.06))] text-white border-orange-500/18",
  "bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] text-white border-white/10",
  "bg-[linear-gradient(180deg,rgba(255,106,0,0.18),rgba(255,106,0,0.05))] text-white border-orange-400/20",
];

const SECTION_LOGOS: Record<SectionId, string> = {
  breakfast: "/category/breakfast.png",
  snacks: "/category/pasta.png",
  desserts: "/category/cake.png",
  coffee: "/category/coffee.png",
  "iced-coffee": "/category/ice-coffee.png",
  "hot-drinks": "/category/hot-drink.png",
  shakes: "/category/milkshake.png",
  smoothies: "/category/smoothie.png",
  mocktails: "/category/ice-coffee.png",
};

export default function Categories() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [placeholderHeight, setPlaceholderHeight] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const updateHeight = () => {
      const rect = el.getBoundingClientRect();
      setPlaceholderHeight(rect.height);
    };
    updateHeight();
    const ro = new ResizeObserver(updateHeight);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isFixed]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsFixed(!entry.isIntersecting);
        });
      },
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const sectionInner = (
    <>
      <div className="flex items-center px-1">
        <h3 className="text-[0.78rem] font-semibold tracking-[0.22em] text-orange-100/74">
          دسته‌بندی منو
        </h3>
      </div>

      <Swiper
        dir="rtl"
        slidesPerView="auto"
        spaceBetween={12}
        grabCursor
        className="hide-scrollbar mt-3 overflow-visible! pb-1"
      >
        {menuSections.map((section, index) => (
          <SwiperSlide key={section.id} className="w-25!">
            <a
              href={`#${section.id}`}
              className={`group flex min-h-full flex-col items-center rounded-[26px] border px-2.5 pb-2.5 pt-2.5 text-center shadow-[0_18px_32px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-transform duration-200 group-active:scale-[0.98] ${SECTION_CARD_SHELLS[index % SECTION_CARD_SHELLS.length]}`}
            >
              <span className="relative mt-3.5 flex h-15 w-full items-center justify-center  rounded-[20px] border border-white/10 bg-black/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_24px_rgba(0,0,0,0.22)]">
                <Image
                  src={`/Easycafe-menu/${SECTION_LOGOS[section.id]}`}
                  alt={`لوگوی دسته ${section.title}`}
                  fill
                  sizes="100px"
                  loading={index === 0 ? "eager" : undefined}
                  className="object-scale-down"
                  style={{
                    transform:
                      section.id === "smoothies"
                        ? "translateY(-10px) scale(2.05)"
                        : "scale(1.8)",
                  }}
                />
              </span>
              <span style={{ whiteSpace: "nowrap" }} className="mt-5 min-h-6 flex items-center justify-center text-[0.75rem]  font-bold leading-4 tracking-[-0.03em] text-white/92">
                {section.title}
              </span>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );

  const compactInner = (
    <Swiper
      dir="rtl"
      slidesPerView="auto"
      spaceBetween={15}
      grabCursor
      className="hide-scrollbar py-1"
    >
      {menuSections.map((section, index) => (
        <SwiperSlide key={section.id} className="min-w-25! max-w-fit">
          <a
            href={`#${section.id}`}
            className="inline-flex items-center gap-2 rounded-[20px] px-3 py-1 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] text-white/92 border border-white/6 shadow-sm"
          >
            <div className="relative flex-none w-9 h-9 rounded-full bg-black/30 border border-white/8 flex items-center justify-center">
              <Image
                src={`/Easycafe-menu/${SECTION_LOGOS[section.id]}`}
                alt={`لوگوی دسته ${section.title}`}
                width={28}
                height={28}
                loading={index === 0 ? "eager" : undefined}
                className="object-contain"
              />
            </div>
            <span className="whitespace-nowrap text-[0.78rem] font-semibold leading-4">
              {section.title}
            </span>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <div className="relative">
      <div ref={sentinelRef} className="h-0" />
      <div style={{ height: isFixed ? placeholderHeight : 0 }} aria-hidden />

      {isFixed ? (
        <div className="fixed left-0 right-0 top-0 z-50 px-3">
          <section
            ref={(el) => { sectionRef.current = el; }}
            id="categories"
            className="mt-0 max-w-110 mx-auto rounded-[30px] overflow-hidden bg-[linear-gradient(180deg,rgba(12,12,12,0.9),rgba(8,8,8,0.82))] px-3 py-2 shadow-[0_22px_44px_rgba(0,0,0,0.22)] backdrop-blur-xl"
          >
            {compactInner}
          </section>
        </div>
      ) : (
        <section
          ref={(el) => { sectionRef.current = el; }}
          id="categories"
          className="sticky top-3 z-30 mt-1 rounded-[30px] overflow-hidden bg-[linear-gradient(180deg,rgba(12,12,12,0.9),rgba(8,8,8,0.82))] px-3 py-3 shadow-[0_22px_44px_rgba(0,0,0,0.22)] backdrop-blur-xl"
        >
          {sectionInner}
        </section>
      )}
    </div>
  );
}

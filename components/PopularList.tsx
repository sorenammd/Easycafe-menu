import Image from "next/image";
import { menuSections } from "./easycafe-data";

const ITEM_THUMBNAIL_POSITIONS = [
  "14% 72%",
  "30% 54%",
  "44% 40%",
  "57% 60%",
  "70% 48%",
  "83% 58%",
  "92% 48%",
];

export default function PopularList() {
  return (
    <section id="menu" className="mt-1 space-y-8">
      {menuSections.map((section, sectionIndex) => (
        <section
          id={section.id}
          key={section.id}
          className="scroll-mt-44 space-y-3"
        >
          <div className="flex items-center px-1">
            <h4 className="text-[1.25rem] font-bold tracking-[-0.04em] text-white">
              {section.title}
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {section.items.map((item, itemIndex) => (
              <article
                key={item}
                className="group relative aspect-square overflow-hidden rounded-[28px] border border-white/8 bg-[#121212] shadow-[0_22px_38px_rgba(0,0,0,0.2)]"
              >
                <Image
                  src="/Easycafe-menu/thumbnail.png"
                  alt={`تصویر ${item}`}
                  fill
                  sizes="(max-width: 640px) 42vw, 180px"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  style={{
                    objectPosition:
                      ITEM_THUMBNAIL_POSITIONS[
                      (sectionIndex * 3 + itemIndex) %
                      ITEM_THUMBNAIL_POSITIONS.length
                      ],
                  }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.16)_42%,rgba(0,0,0,0.84)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <h5 className="line-clamp-2 text-sm font-bold leading-5 text-white">
                    {item}
                  </h5>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}

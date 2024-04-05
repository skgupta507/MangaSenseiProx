import { fetchCover, timeAgo } from "@/utils/requests";
import Image from "next/image";
import Link from "next/link";

const Mangas = async ({ mangas }: { mangas: any }) => {
  return mangas?.map(async (manga: any, idx: number) => {
    let time = timeAgo(manga?.updatedAt);
    return (
      <Link
        key={idx}
        href={`/${manga?.id}`}
        className="w-full text-center group leading-none"
        title={manga?.title["en"] || manga?.title["ja-ro"]}
      >
        <Image
          src={manga?.cover}
          height={300}
          width={200}
          alt={manga.title}
          className="aspect-[1/1.3] w-full rounded object-cover group-hover:scale-[1.02] brightness-[.8] group-hover:brightness-100 shadow"
        />
        <div className="h-6 md:text-[15px] opacity-80 group-hover:opacity-100 pt-1 font-normal md:font-semibold text-sm overflow-hidden group-hover:text-blue-400">
          {manga?.title["en"] || manga?.title["ja-ro"]}
        </div>
        <div className="text-xs md:text-sm text-primary brightness-50 group-hover:brightness-75">
          {time}
        </div>
      </Link>
    );
  });
};
export default Mangas;

"use client";
import { timeAgo } from "@/utils/requests";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Mangas = ({ mangas }: { mangas: any }) => {
  console.log(mangas);
  return mangas?.map((manga: any, idx: number) => (
    <Link href={`/${manga?.id}`} className="w-full text-center group">
      <Image
        key={idx}
        src={manga?.cover}
        height={500}
        width={400}
        alt={`manga-cover-${manga?.title}`}
        className="aspect-[1/1.3] w-full rounded group-hover:scale-[1.02] brightness-[.8] group-hover:brightness-100 shadow"
      />
      <h1 className="h-6 md:text-base py-1 font-semibold text-sm overflow-hidden group-hover:text-blue-400">
        {manga?.title["en"] || manga?.title["ja-ro"]}
      </h1>
      <p className="text-xs md:text-sm text-primary brightness-50">
        {timeAgo(manga?.updatedAt)}
      </p>
    </Link>
  ));
};

export default Mangas;

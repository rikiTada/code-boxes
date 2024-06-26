"use client";

import Link from "next/link";
import { useStore } from "../store";
import Header from "@/components/header";

function Counter() {
  const { count, inc } = useStore();

  return (
    <div>
      <Header title="HOME">
        <Link href="/store">
          <div className="py-2 px-4 inline-block rounded bg-zinc-800 hover:bg-zinc-700 text-white">
            ⇒ 下層ページ
          </div>
        </Link>
      </Header>

      <div className="grid grid-cols-2 gap-4 place-items-center min-h-[calc(100vh-160px)]">
        <p className="text-4xl">{count}</p>
        <button
          className="py-2 px-4 rounded bg-blue-400 text-white hover:bg-blue-500"
          onClick={inc}
        >
          + One up
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return <Counter />;
}

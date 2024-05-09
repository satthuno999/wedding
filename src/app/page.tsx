import { Divider, Button, ColumnContainer } from "@/components";
import ML5Animation from "@/components/AnimateName";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-full p-6 bg-slate-50 flex flex-col items-center justify-center gap-6">
        <p className="text-lg font-medium text-slate-700">
          CHÍNH THỨC VỀ CHUNG MỘT NHÀ
        </p>
        <div className="text-5xl font-bold text-slate-950 text-wedding">
          <ML5Animation />
          {/* Xuân Bình & Thuý Mai */}
        </div>
        <p className="text-lg font-medium text-slate-700">
          Cùng chung vui với chúng tôi
        </p>
        {/* <Divider /> */}
        {/* <Button /> */}
        <p className="text-sm mt-6 text-slate-400">Scroll down ↓</p>
      </div>
      <ColumnContainer />
      <div className="h-screen w-full p-6 bg-slate-50">
        <Link href="https://unsplash.com/" className="underline text-slate-950">
          Images from Unsplash ↗
        </Link>
      </div>
    </main>
  );
}

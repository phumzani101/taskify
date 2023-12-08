import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr2" /> No 1 Task Manager
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Taskify Helps Team Move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Work forward.
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 mx-w-xs md:max-w-2xl text-center mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio unde
        facilis, vero sint quisquam explicabo commodi fugit enim ratione
        assumenda neque placeat ipsum, exercitationem omnis. Deserunt
        repellendus earum magnam eos.
      </div>

      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Use Taskify for free</Link>
      </Button>
    </div>
  );
}

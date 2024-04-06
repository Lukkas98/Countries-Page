
import Link from "next/link"
import SectionCards from "./components/sectionCards";

export default function HomePage({ searchParams }) {

  return (
    <main>
      <nav className="flex justify-between p-4 bg-amber-600 text-white">
        <Link
          className="px-2 py-1 bg-slate-500 font-bold rounded-lg"
          href={"/"}
        >
          Salir
        </Link>
        <Link href={"/create"} >Create Activity</Link>
        {/* <InputSearch /> */}
      </nav>
      <section className="flex flex-wrap justify-evenly gap-5 my-10 mx-6">
        <SectionCards searchParams={searchParams} />
      </section>
    </main>
  );
}

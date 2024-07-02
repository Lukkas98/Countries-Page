
import Link from "next/link"
import SectionCards from "./components/sectionCards";
import Paginate from "./components/paginate";
import { func } from "../api/func";

export default async function HomePage({ searchParams }) {

  const countries = await func.getAllCountries()
  const pageSizes = 15
  const totalPages = Math.ceil(countries.length / pageSizes)

  return (
    <main>
      <nav className="flex justify-between p-4 bg-amber-600 text-white">
        <Link
          className="px-2 py-1 bg-slate-500 font-bold rounded-lg"
          href={"/"}
        >
          Salir
        </Link>
        <Link href={{pathname: "/create", query: searchParams}} >Create Activity</Link>
      </nav>
      <section className="grid grid-rows-[auto,50px]">
        <Paginate pageSizes={pageSizes} totalPages={totalPages}/>
        <SectionCards searchParams={searchParams} pageSizes={pageSizes} />
      </section>
    </main>
  );
}

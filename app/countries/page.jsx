import Link from "next/link";
import SectionCards from "./components/sectionCards";
import Paginate from "./components/paginate";
import { funcCountry } from "../api/func";
import { DashiconsExit } from "@/public/DashiconsExit";
import { Suspense } from "react";

export default async function HomePage({ searchParams }) {
  const countries = await funcCountry.getAllCountries();
  const pageSizes = 15;
  const totalPages = Math.ceil(countries.length / pageSizes);

  return (
    <main>
      <nav className="grid grid-cols-[50px,1fr] place-items-center p-4 bg-blue-700 text-white">
        <Link
          href={"/"}
          title="exit"
          className="transition-all text-red-700 hover:scale-125"
        >
          <span className="text-red-100 text-sm">exit</span>
          <DashiconsExit />
        </Link>
        <h2 className="font-bold text-2xl">Search any country</h2>
        {/* <Link href={{pathname: "/create", query: searchParams}} >Create Activity</Link> */}
      </nav>
      <section className="grid">
        <div className="m-4">
          <Suspense fallback={<div>CARGANDO...</div>}>
            <Paginate pageSizes={pageSizes} totalPages={totalPages} />
            <SectionCards searchParams={searchParams} pageSizes={pageSizes} />
          </Suspense>
        </div>
      </section>
    </main>
  );
}

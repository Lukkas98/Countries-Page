import { funcCountry } from "@/app/api/func";
import Link from "next/link";
import Image from "next/image";

export default async function SectionCards({ searchParams, pageSizes }) {
  const { page, search } = searchParams;

  const countries = await funcCountry.getCountries(Number(page), pageSizes);

  return (
    <div className="my-4 gap-y-5 grid grid-cols-2 place-items-center">
      {countries.map((country) => (
        <Link
          href={{
            pathname: `/countries/${country.name.replace(/\s+/g, "-")}`,
            query: searchParams,
          }}
          className=" h-fit w-[200px] border p-3 border-black text-center flex flex-col gap-4"
          key={country._id}
        >
          <h6>{country.name}</h6>
          <div className="w-full h-[100px] relative z-20">
            <Image
              className="z-10"
              src={country.image}
              fill={true}
              alt={`${country.name} flag`}
              sizes="100%"
            />
          </div>
          <span>population: {country.population}</span>
        </Link>
      ))}
    </div>
  );
}

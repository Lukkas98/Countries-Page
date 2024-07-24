import { funcCountry } from "@/app/api/func";
import Country from "./country";
import CountryModal from "./modalCountry";

export default async function SectionCards({ searchParams, pageSizes }) {
  const { page, search } = searchParams;

  const countries = await funcCountry.getCountries(Number(page), pageSizes);

  return (
    <div className="my-4 max-w-7xl mx-auto h-fit flex flex-wrap justify-center items-center gap-3">
      {countries.map((country, i) => (
        <CountryModal key={i} country={JSON.parse(JSON.stringify(country))}>
          <Country country={country} searchParams={searchParams} />
        </CountryModal>
        // <Country country={country} searchParams={searchParams} key={i} />
      ))}
    </div>
  );
}

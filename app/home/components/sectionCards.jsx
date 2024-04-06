import { func } from "@/app/api/func";

export default async function SectionCards({ searchParams }) {
  //toda la logica de fetching
  const { page, search } = searchParams

  const pageSizes = 20
  const countries = await func.getCountries(Number(page), pageSizes) 

  return (
    <div className="flex flex-wrap gap-2">
      {
        countries.map((country)=>(
          <div className="border p-2" key={country._id}>
            <p>{country.name}</p>
          </div>
        ))
      }
    </div>
  );
}

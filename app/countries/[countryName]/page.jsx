import { funcCountry } from "@/app/api/func";
import Link from "next/link";
import Image from "next/image";

export default async function Detail({ params, searchParams }) {
  const { countryName } = params;

  const country = await funcCountry.getCountryByName(countryName);
  const {
    name,
    image,
    population,
    continents,
    subregion,
    capital,
    area,
    region,
    // ActivitiesName,
  } = country;

  return (
    <main className="flex flex-col gap-3 items-center">
      <Link href={{pathname: "/countries", query: searchParams}}>Volver</Link>
      <h2>{name}</h2>
      <Image src={image} width={200} height={200} alt={`${name} flag`} />
      <p>population: {population}</p>
      <p>continent: {continents[0]}</p>
      <p>subregion: {subregion}</p>
      <p>capital: {capital}</p>
      <p>area: {area}</p>
      <p>region: {region}</p>
      {/* <div>
        <p>Activities: </p>
        {ActivitiesName?.map((activity) => (
          <p key={activity._id}>{activity.name}</p>
        ))}
      </div> */}
    </main>
  );
}

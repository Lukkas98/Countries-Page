import { funcCountry } from "@/app/api/func";
import Link from "next/link";
import Image from "next/image";

const relevantProperties = [
  "population",
  "continents",
  "subregion",
  "capital",
  "area",
  "region",
];

export default async function Detail({ params, searchParams }) {
  const { countryName } = params;

  const country = await funcCountry.getCountryByName(countryName);
  const {
    name,
    image,
    // ActivitiesName,
  } = country;
  const formattedData = relevantProperties.map((key) => {
    return {
      title: key,
      data: country[key],
    };
  });

  return (
    <main className="flex flex-col gap-6 justify-center items-center p-5 mx-auto text-white">
      <Link
        className="hover:text-blue-700 transition-colors duration-300"
        href={{ pathname: "/countries", query: searchParams }}
      >
        Volver
      </Link>
      <h2 className="text-3xl font-bold">{name}</h2>
      <div className="relative aspect-video w-3/4">
        <Image
          src={image}
          fill={true}
          sizes="100%"
          alt={`${name} flag`}
          className="rounded-md shadow-black shadow-md"
        />
      </div>
      <div className="text-lg flex flex-col gap-4 px-5 py-2 bg-blue-800 rounded-xl shadow-black shadow">
        {formattedData.map((data, i) => (
          <p key={i}>
            <span className="font-semibold">{data.title} :</span> {data.data}
          </p>
        ))}
      </div>
      {/* <div className="text-center">
    <p className="text-lg font-semibold text-gray-800">Activities:</p>
    {ActivitiesName?.map((activity) => (
      <p key={activity._id} className="text-gray-700">{activity.name}</p>
    ))}
  </div> */}
    </main>
  );
}

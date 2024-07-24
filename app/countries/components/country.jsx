import Link from "next/link";
import Image from "next/image";

export default function Country({ country, searchParams }) {
  return (
    <Link
      href={{
        pathname: `/countries/${country.name.replace(/\s+/g, "-")}`,
        query: searchParams,
      }}
      className="w-[200px] aspect-video relative border p-3 border-black text-center rounded-lg bg-blue-900 bg-opacity-90 text-white hover:bg-blue-950 transition-all flex flex-col gap-4 shadow-gray-800 shadow-md group"
      key={country._id}
    >
      <h6 className="font-bold text-lg line-clamp-1 duration-500 transform transition-transform">
        {country.name}
      </h6>
      <sub>{country.continents[0]}</sub>
      <div className="h-[125px] aspect-video relative z-20">
        <Image
          className="z-10 rounded-md shadow-black shadow-md"
          src={country.image}
          fill={true}
          alt={`${country.name} flag`}
          sizes="100%"
        />
      </div>
      <span>population: {country.population}</span>
    </Link>
  );
}

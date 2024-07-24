import Link from "next/link";

export default function Landing() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center w-full px-4 text-center text-white">
      <h1 className="text-4xl font-bold mb-6">
        Search any country in the world
      </h1>
      <p className="mb-12 text-lg">
        Get detailed information from any country in the world.
      </p>
      <Link
        href="/countries"
        className="px-8 py-4 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700 transition"
      >
        Enter
      </Link>
    </main>
  );
}

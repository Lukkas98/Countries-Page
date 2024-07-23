import Link from "next/link";
import Footer from "./home/components/footer";

export default function Landing() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-300">
      <main className="flex flex-1 flex-col items-center justify-center w-full px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Search any country in the world
        </h1>
        <p className="mb-12 text-lg">
          Get detailed information from any country in the world.
        </p>
        <Link
          href="/home"
          className="px-8 py-4 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700 transition"
        >
          Enter
        </Link>
      </main>
      <Footer />
    </div>
  );
}

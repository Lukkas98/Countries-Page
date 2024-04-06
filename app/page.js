import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24 bg-teal-100">
      <h1 className="font-bold text-2xl">Countries Page</h1>
      <Link className="px-2 py-1 bg-red-300 border-2 rounded-md" href={"/home?page=1"}>Enter</Link>
    </main>
  );
}

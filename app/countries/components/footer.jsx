export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-20 bg-gray-900 text-white">
      <p className="text-sm">© {new Date().getFullYear()} Lucas Palma.</p>
    </footer>
  );
}

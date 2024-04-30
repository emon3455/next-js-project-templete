import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900 font-mono space-y-6">
      <h1>Not found – 404!</h1>
      <div>
        <Link
          href="/"
          className="px-6 py-2 my-6 text-sm text-white transition-all bg-light-primary rounded-lg outline-none hover:bg-dark-primary focus:bg-light-primary uppercase focus:outline-none border-1 border-white hover:border-orange-400 focus:bg-dark-primary"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

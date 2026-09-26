import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#0C0D10] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-[120px] sm:text-[180px] font-extrabold leading-none text-[#C2F800]">
          404
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4">Page Not Found</h2>
        <p className="text-[#9CA3AF] max-w-md mx-auto mt-4 leading-7">
          Sorry, the page you are looking for doesn&apos;t exist or may have
          been moved.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 px-7 py-3 rounded-full bg-[#C2F800] text-black font-semibold hover:opacity-90 transition"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t-1 w-full border-gray-200 px-4 py-7 mt-10 mb-16 sm:mb-0">
      <div className="w-full mx-auto max-w-7xl flex flex-row items-center justify-between">
        <span className="text-sm sm:text-base text-gray-500 sm:text-center">
          © 2025{" "}
          All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center text-sm sm:text-base font-medium text-gray-500 sm:mt-0">
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

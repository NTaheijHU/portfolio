import Link from "next/link";

export default function NavItem({ item }) {
  if (item.name === "Contact") {
    return (
      <Link href={item.path}>
        <a className="ml-8 bg-blue-700 hover:bg-blue-800 text-blue-100 font-semibold text-lg py-3 px-10 rounded-lg duration-200 ease-in-out"
          role="button" aria-label={item.name}>
          {item.name}
        </a>
      </Link>
    );
  }
  return (
    <Link href={item.path}>
      <a className="md:active:bg-gray-100 dark:text-white md:active:text-black text-lg hover:text-black dark:hover:text-white p-2 rounded-lg duration-200 ease-in-out hover-underline-animation"
          role="button" aria-label={item.name}>
        {item.name}
      </a>
    </Link>
  );
}

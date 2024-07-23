"use client";

import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function Paginate({ totalPages = 1 }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const inputRef = useRef(null);

  const actualPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = actualPage;
  }, [actualPage]);

  const createLink = (page = 1) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    return `${pathname}?${params}`;
  };

  const handleOnChange = useDebouncedCallback((value) => {
    const params = new URLSearchParams(searchParams);
    const numberPage = Number(value);

    if (numberPage > totalPages) params.set("page", totalPages);
    else if (numberPage < 1 || isNaN(numberPage)) params.set("page", 1);
    else params.set("page", numberPage);

    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className="flex mx-auto w-[130px] items-center justify-center rounded bg-blue-600 py-1 text-white">
      <Link
        href={actualPage <= 1 ? "#" : createLink(actualPage - 1)}
        className="inline-flex size-8 items-center justify-center"
      >
        <span className="sr-only">Prev Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </Link>

      <span className="h-4 w-px bg-white/25" aria-hidden="true"></span>

      <div>
        <input
          ref={inputRef}
          type="text"
          className="h-8 w-12 rounded border-none bg-transparent p-0 text-center text-xs font-medium [-moz-appearance:_textfield] focus:outline-none focus:ring-inset focus:ring-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          defaultValue={actualPage}
          onChange={(e) => handleOnChange(e.target.value)}
          id="PaginationPage"
        />
      </div>

      <span className="h-4 w-px bg-white/25"></span>

      <Link
        href={actualPage >= totalPages ? "#" : createLink(actualPage + 1)}
        className="inline-flex size-8 items-center justify-center"
      >
        <span className="sr-only">Next Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
}

"use client";

import { DashiconsArrowLeftAlt2 } from "@/public/DashiconsArrowLeftAlt2";
import { DashiconsArrowRightAlt2 } from "@/public/DashiconsArrowRightAlt2";
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
        className={`inline-flex size-8 items-center justify-center ${
          actualPage <= 1
            ? "pointer-events-none text-gray-400"
            : "hover:scale-110 hover:text-black transition-all duration-[400ms]"
        } `}
      >
        <DashiconsArrowLeftAlt2 />
      </Link>
      <span className="h-4 w-px bg-white/25" aria-hidden="true"></span>
      <div>
        <input
          ref={inputRef}
          autoComplete="off"
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
        className={`inline-flex size-8 items-center justify-center ${
          actualPage >= totalPages
            ? "pointer-events-none text-gray-400"
            : "hover:scale-110 hover:text-black transition-all duration-[400ms]"
        } `}
      >
        <DashiconsArrowRightAlt2 />
      </Link>
    </div>
  );
}

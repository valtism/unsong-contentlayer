import { ReactNode } from "react";
import Link from "next/link";

interface LayoutProps {
  children?: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="prose dark:prose-invert lg:prose-xl px-4 mx-auto">
      <header className="flex items-center justify-between not-prose pt-4 pb-10">
        <Link href="/">
          <a>
            <h1 className="text-3xl font-bold hover:contrast-200">Unsong</h1>
          </a>
        </Link>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1">
            <FontSizeButton increment={-1}>a</FontSizeButton>
            <FontSizeButton increment={1}>A</FontSizeButton>
          </div>
          <button
            className="before:content-['🌙'] dark:before:content-['☀️'] grayscale invert dark:invert-0"
            onClick={() => document.documentElement.classList.toggle("dark")}
          ></button>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}

interface FontSizeButtonProps {
  increment: number;
  children?: ReactNode;
}
function FontSizeButton({ increment, children }: FontSizeButtonProps) {
  return (
    <button
      onClick={() => {
        const rootFontSize = parseInt(document.documentElement.style.fontSize);
        document.documentElement.style.fontSize = `${
          rootFontSize + increment
        }px`;
      }}
      className="border border-gray-300 hover:border-gray-400 dark:border-gray-400 dark:hover:border-gray-300 dark:hover:text-white rounded-md px-1.5 py-2 leading-4"
    >
      {children}
    </button>
  );
}

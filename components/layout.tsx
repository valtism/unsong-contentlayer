import { ReactNode } from "react";
import Link from "next/link";

interface LayoutProps {
  children?: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="prose dark:prose-invert lg:prose-xl mx-auto">
      <header className="flex items-center justify-between not-prose pt-4 pb-10">
        <Link href="/">
          <a>
            <h1 className="text-3xl font-bold hover:contrast-200">Unsong</h1>
          </a>
        </Link>
        <button
          className="before:content-['🌙'] dark:before:content-['☀️'] grayscale invert dark:invert-0"
          onClick={() => document.documentElement.classList.toggle("dark")}
        ></button>
      </header>
      <main>{children}</main>
    </div>
  );
}

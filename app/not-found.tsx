import { buttonVariants } from "@/app/components/button";
import {  HomeIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import Footer from "@/app/ui/layout/footer-index";

export default async function NotFoundPage (){

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16 min-h-[90vh]">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 font-mono text-6xl font-bold tracking-tight lg:text-7xl">
            404
          </h1>
          <p className="mb-4 text-3xl font-medium tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Page not found
          </p>
          <div className="flex items-center justify-center">
            <Link className={buttonVariants({ variant: "outline" })} href="/">
              <HomeIcon className="w-[18px]" />
              <span className="block ml-[8px]">Volver a la principal</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
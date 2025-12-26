import { Footer } from "@/components/hoc/layout-component/footer";
import { Header } from "@/components/hoc/layout-component/header";
import { SearchHistorySidebar } from "@/components/hoc/layout-component/sidebar";
import Loading from "@/components/ui/loader";
import Image from "next/image";
import { Suspense } from "react";

interface PrivateLayoutProps {
  readonly children: React.ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = async ({ children }) => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="relative flex flex-col h-screen overflow-hidden bg-background">
        <div
          className="fixed top-0 right-0 z-0 pointer-events-none select-none"
          aria-hidden="true"
        >
          <Image
            src="/gird.svg"
            alt="gird background decoration"
            width={1000}
            height={1000}
            className="object-contain object-top-right mix-blend-screen opacity-10 w-125 h-125 sm:w-150 sm:h-150 md:w-175 md:h-175 lg:w-200 lg:h-200 xl:w-225 xl:h-225"
            priority
          />
        </div>
        <div
          className="fixed right-0 z-0 pointer-events-none select-none top-13.25"
          aria-hidden="true"
        >
          <Image
            src="/star.svg"
            alt="light star background decoration"
            width={800}
            height={800}
            className="object-contain object-top-right w-100 h-100 sm:w-125 sm:h-125 md:w-150 md:h-150 lg:w-175 lg:h-175 xl:w-200 xl:h-200"
            priority
          />
        </div>

        <Header />

        <div className="relative z-10 flex flex-1 overflow-hidden">
          <SearchHistorySidebar />

          <main className="flex-1 overflow-x-hidden overflow-y-auto scroll-smooth">
            {children}
          </main>
        </div>

        <Footer />
      </div>
    </Suspense>
  );
};

export default PrivateLayout;

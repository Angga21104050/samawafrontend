import Cities from "@/components/cities";
import Header from "@/components/header";
import Testimonials from "@/components/testimonials";
import WeddingPackages from "@/components/weddingPackages";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-16">
      <Header />

      <section>
        <WeddingPackages show="popular" type="slider" />
      </section>

      <section className="container mx-auto flex flex-col px-10">
        <h2 className="text-3xl font-bold max-w-md mx-auto text-center mb-8">
          Alasan Mereka Memilih Wedding Package Samawa
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col border rounded-3xl p-8 gap-y-5 items-start">
            <span className="text-color2">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M22.3959 5.10419C23.8334 3.87502 26.1875 3.87502 27.6458 5.10419L30.9376 7.93749C31.5626 8.47916 32.7292 8.91672 33.5625 8.91672H37.1042C39.3125 8.91672 41.125 10.7292 41.125 12.9375V16.4791C41.125 17.2916 41.5625 18.4791 42.1042 19.1041L44.9376 22.3958C46.1667 23.8333 46.1667 26.1875 44.9376 27.6459L42.1042 30.9374C41.5625 31.5624 41.125 32.7291 41.125 33.5625V37.1042C41.125 39.3125 39.3125 41.125 37.1042 41.125H33.5625C32.75 41.125 31.5626 41.5625 30.9376 42.1042L27.6458 44.9375C26.2083 46.1667 23.8542 46.1667 22.3959 44.9375L19.1042 42.1042C18.4792 41.5625 17.3125 41.125 16.4792 41.125H12.875C10.6667 41.125 8.8542 39.3125 8.8542 37.1042V33.5416C8.8542 32.7291 8.41672 31.5624 7.89589 30.9374L5.08337 27.625C3.87504 26.1875 3.87504 23.8542 5.08337 22.4167L7.89589 19.1041C8.41672 18.4791 8.8542 17.3125 8.8542 16.5V12.9375C8.8542 10.7292 10.6667 8.91672 12.875 8.91672H16.4792C17.2917 8.91672 18.4792 8.47916 19.1042 7.93749L22.3959 5.10419Z"
                  className="fill-current"
                />
                <path
                  d="M34.5416 23.0625C34.1458 22.5 33.4792 22.1875 32.6875 22.1875H28.625C28.3541 22.1875 28.1042 22.0833 27.9375 21.875C27.7708 21.6666 27.6875 21.3958 27.7291 21.1041L28.2291 17.8541C28.4375 16.8958 27.7917 15.7916 26.8333 15.4791C25.9375 15.1458 24.875 15.6041 24.4583 16.2291L20.4166 22.2291V21.4791C20.4166 20.0208 19.7917 19.4166 18.25 19.4166H17.2291C15.6875 19.4166 15.0625 20.0208 15.0625 21.4791V31.4375C15.0625 32.8958 15.6875 33.5 17.2291 33.5H18.25C19.7083 33.5 20.3333 32.9374 20.3958 31.6041L23.4583 33.9583C23.875 34.3749 24.8125 34.6041 25.4792 34.6041H29.3333C30.6666 34.6041 32 33.6041 32.2916 32.3749L34.7292 24.9582C35 24.2916 34.9375 23.6041 34.5416 23.0625Z"
                  className="fill-current"
                />
              </svg>
            </span>
            <span className="flex flex-col gap-y-2">
              <h6 className="font-bold text-xl">Dipercaya Sejak 1970</h6>
              <p className="">
                Lorem ipsum dolor si amet nikah berkah dunia akhirat nantinya
              </p>
            </span>
            <Link href="#" className="text-color2 hover:underline">Learn More</Link>
          </div>
          <div className="flex flex-col border rounded-3xl p-8 gap-y-5 items-start">
            <span className="text-color2">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.5833 31.25C34.9792 31.25 31.25 34.9792 31.25 39.5833C31.25 41.1458 31.6875 42.625 32.4584 43.875C33.8959 46.2917 36.5417 47.9167 39.5833 47.9167C42.625 47.9167 45.2708 46.2917 46.7083 43.875C47.4791 42.625 47.9167 41.1458 47.9167 39.5833C47.9167 34.9792 44.1875 31.25 39.5833 31.25ZM43.8958 38.6875L39.4583 42.7917C39.1667 43.0625 38.7708 43.2083 38.3958 43.2083C38 43.2083 37.6042 43.0625 37.2917 42.75L35.2291 40.6875C34.6249 40.0833 34.6249 39.0833 35.2291 38.4792C35.8333 37.875 36.8333 37.875 37.4374 38.4792L38.4375 39.4792L41.7708 36.3958C42.3958 35.8125 43.3958 35.8542 43.9791 36.4792C44.5625 37.1042 44.5208 38.0833 43.8958 38.6875Z"
                  className="fill-current"
                />
                <path
                  d="M45.8333 15.7083V18.75H4.16663V15.7083C4.16663 10.9375 8.04168 7.08334 12.8125 7.08334H37.1874C41.9582 7.08334 45.8333 10.9375 45.8333 15.7083Z"
                  className="fill-current"
                />
                <path
                  opacity="0.4"
                  d="M4.16663 18.75V34.2917C4.16663 39.0625 8.02082 42.9167 12.7917 42.9167H25.8333C27.0417 42.9167 28.0833 41.8958 27.9791 40.6875C27.6874 37.5 28.7083 34.0417 31.5417 31.2917C32.7083 30.1458 34.1458 29.2708 35.7083 28.7708C38.3125 27.9375 40.8333 28.0417 43.0624 28.7917C44.4166 29.25 45.8333 28.2708 45.8333 26.8333V18.75H4.16663ZM16.6666 35.9375H12.5C11.6458 35.9375 10.9375 35.2292 10.9375 34.375C10.9375 33.5208 11.6458 32.8125 12.5 32.8125H16.6666C17.5208 32.8125 18.2291 33.5208 18.2291 34.375C18.2291 35.2292 17.5208 35.9375 16.6666 35.9375Z"
                  className="fill-current"
                />
                <path
                  d="M18.2292 34.375C18.2292 35.2292 17.5208 35.9375 16.6667 35.9375H12.5C11.6458 35.9375 10.9375 35.2292 10.9375 34.375C10.9375 33.5208 11.6458 32.8125 12.5 32.8125H16.6667C17.5208 32.8125 18.2292 33.5208 18.2292 34.375Z"
                  className="fill-current"
                />
              </svg>
            </span>
            <span className="flex flex-col gap-y-2">
              <h6 className="font-bold text-xl">Dipercaya Sejak 1970</h6>
              <p className="">
                Lorem ipsum dolor si amet nikah berkah dunia akhirat nantinya
              </p>
            </span>
            <Link href="#" className="text-color2 hover:underline">Learn More</Link>
          </div>

          <div className="flex flex-col border rounded-3xl p-8 gap-y-5 items-start">
            <span className="text-color2">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M31.2709 30.7291V45.8124L6.27085 45.8541V30.7291L6.25 27.6041V14.7291C6.25 13.3333 6.95836 12.0415 8.1042 11.2707L16.4375 5.70825C17.8334 4.77075 19.6666 4.77075 21.0625 5.70825L29.3958 11.2707C30.5625 12.0415 31.25 13.3333 31.25 14.7291V27.6041L31.2709 30.7291Z"
                  className="fill-current"
                />
                <path
                  d="M45.8333 44.2708H43.1874V38.0208C45.1666 37.375 46.6041 35.5208 46.6041 33.3333V29.1667C46.6041 26.4375 44.3749 24.2083 41.6458 24.2083C38.9166 24.2083 36.6874 26.4375 36.6874 29.1667V33.3333C36.6874 35.5 38.1041 37.3333 40.0416 38V44.2708H4.16663C3.31246 44.2708 2.60413 44.9792 2.60413 45.8333C2.60413 46.6875 3.31246 47.3958 4.16663 47.3958H41.5208C41.5624 47.3958 41.5833 47.4167 41.6249 47.4167C41.6666 47.4167 41.6875 47.3958 41.7292 47.3958H45.8333C46.6875 47.3958 47.3958 46.6875 47.3958 45.8333C47.3958 44.9792 46.6875 44.2708 45.8333 44.2708Z"
                  className="fill-current"
                />
                <path
                  d="M31.2709 30.7292H6.27085L6.25 27.6042H31.25L31.2709 30.7292Z"
                  className="fill-current"
                />
                <path
                  d="M18.75 47.3958C17.8958 47.3958 17.1875 46.6875 17.1875 45.8333V38.0208C17.1875 37.1667 17.8958 36.4583 18.75 36.4583C19.6042 36.4583 20.3125 37.1667 20.3125 38.0208V45.8333C20.3125 46.6875 19.6042 47.3958 18.75 47.3958Z"
                  className="fill-current"
                />
                <path
                  d="M18.75 22.3958C20.7635 22.3958 22.3958 20.7635 22.3958 18.75C22.3958 16.7365 20.7635 15.1042 18.75 15.1042C16.7364 15.1042 15.1041 16.7365 15.1041 18.75C15.1041 20.7635 16.7364 22.3958 18.75 22.3958Z"
                  className="fill-current"
                />
              </svg>
            </span>
            <span className="flex flex-col gap-y-2">
              <h6 className="font-bold text-xl">Dipercaya Sejak 1970</h6>
              <p className="">
                Lorem ipsum dolor si amet nikah berkah dunia akhirat nantinya
              </p>
            </span>
            <Link href="#" className="text-color2 hover:underline">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-col px-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold max-w-sm">
            Our Latest & Best Wedding Packages
          </h2>
          <Link
            href="/packages"
            className="border border-dark1 px-5 py-3 text-center rounded-full font-semibold hover:bg-color2 hover:border-none hover:text-light1"
          >Explore All
          </Link>
        </div>
        <WeddingPackages show="newest" type="grid" />
      </section>

      <section className="bg-light2 py-16">
        <div className="container px-32 mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold max-w-sm">
              Browse Packages City Recomendation
            </h2>
            <Link
              href={`${process.env.HOST_APP}/cities`}
              className="border border-dark1 px-5 py-3 text-center rounded-full font-semibold hover:bg-color2 hover:border-none hover:text-light1"
            >Explore All
            </Link>
          </div>
          <Cities />
        </div>
      </section>
      <section className="flex flex-col">
        <div className="container mx-auto flex justify-between items-center mb-8 px-10">
          <h2 className="text-3xl font-bold max-w-xs">
            Happy Stories of Our Wedding
          </h2>
          <Link
            href={`${process.env.HOST_API}/testimonials`}
            className="border border-dark1 px-5 py-3 text-center rounded-full font-semibold hover:bg-color2 hover:border-none hover:text-light1"
          >Explore All
          </Link>
        </div>

        <Testimonials />

      </section>
    </main>
  );
}

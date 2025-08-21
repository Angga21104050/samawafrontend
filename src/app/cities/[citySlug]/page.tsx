import { TCity } from '@/components/cities/types';
import Header from '@/components/header'
import thousands from '@/libs/thousands';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react'
import { WeddingPackagesSlider } from '@/components/weddingPackages';
import { WeddingPackagesGrid } from '@/components/weddingPackages';
import Link from 'next/link';
import Testimonials from '@/components/testimonials';

type Request = {
    params: {
        citySlug: string
    }
};

async function getData(slug: string) {
    try {
        const req = await fetch(`${process.env.HOST_API}/api/city/${slug}`, {
            method: "Get",
            cache: "no-cache",
        })

        return req.json()
    } catch (error) {
        console.log(error)
    }
}

export async function generateMetadata(
    { params }: Request,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const { citySlug } = await params

    // fetch data
    const { data: city }: { data: TCity } = await getData(citySlug)

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: city.name,
        openGraph: {
            images: [`${process.env.HOST_API}/storage/${city.icon}`, ...previousImages],
        },
    }
}

async function DetailsCityPage({ params }: Request) {

    const { data: city }: { data: TCity } = await getData(params.citySlug)

    return (
        <main className="flex flex-col gap-y-16">
            <Header />
            <section className="flex flex-col">
                <div className="container mx-auto flex justify-between items-center mb-8 px-10">
                    <span className="flex max-w-sm">
                        <h2 className="text-4xl font-bold">
                            Wedding Package in {city.name} City
                        </h2>
                    </span>

                    <span className="flex flex-col items-end gap-y-2">
                        <span className="flex gap-x-1 text-color3">
                            <svg
                                width="22"
                                height="20"
                                viewBox="0 0 22 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z"
                                    className="fill-current"
                                />
                            </svg>
                            <svg
                                width="22"
                                height="20"
                                viewBox="0 0 22 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z"
                                    className="fill-current"
                                />
                            </svg>
                            <svg
                                width="22"
                                height="20"
                                viewBox="0 0 22 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z"
                                    className="fill-current"
                                />
                            </svg>
                            <svg
                                width="22"
                                height="20"
                                viewBox="0 0 22 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z"
                                    className="fill-current"
                                />
                            </svg>
                            <svg
                                width="22"
                                height="20"
                                viewBox="0 0 22 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z"
                                    className="fill-current"
                                />
                            </svg>
                        </span>
                        <span className="font-bold">({thousands(city.weddingPackages_count)})</span>
                    </span>
                </div>
                <WeddingPackagesSlider data={city.weddingPackages.filter((weddingPackage) => weddingPackage.isPopular === 1)} />
            </section>
            <section className="container mx-auto flex flex-col px-10">
                <div className="flex justify-center items-center mb-8">
                    <h2 className="text-3xl font-bold max-w-md text-center">
                        Browse Our Best Selection Wedding Packages
                    </h2>
                </div>

                <WeddingPackagesGrid data={city.weddingPackages} />
            </section>
            <section className="flex flex-col ">
                <div className="container mx-auto flex justify-between items-center mb-8 px-10">
                    <h2 className="text-3xl font-bold max-w-xs">
                        Happy Stories of Our Wedding
                    </h2>
                    <Link
                        href='/testimonials'
                        className="border border-dark1 px-5 py-3 text-center rounded-full font-semibold hover:bg-color2 hover:border-none hover:text-light1"
                    >Explore All
                    </Link>
                </div>
                <Testimonials />
            </section>
        </main>
    )
}

export default DetailsCityPage
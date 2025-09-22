import Header from '@/components/header';
import { TPackage } from '@/components/weddingPackages/types';
import { Content as ContentTestimoni } from '@/components/testimonials';
import thousands from '@/libs/thousands';
import { Metadata, ResolvingMetadata } from 'next';
import Link from 'next/link';
import React from 'react'
import Slides from './slides';
import { Content as ContentBonus } from '@/components/bonus';

type Request = {
    params: {
        packageSlug: string;
    };
};

async function getData(slug: string) {
    try {
        const req = await fetch(`${process.env.HOST_API}/api/wedding-package/${slug}`, {
            method: "GET",
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
    const { packageSlug } = await params

    // fetch data
    const { data: details }: { data: TPackage } = await getData(packageSlug)

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: details.name,
        openGraph: {
            images: [`${process.env.HOST_API}/storage/${details.thumbnail}`, ...previousImages],
        },
    }
}

async function PackageDetailsPage({ params }: Request) {

    const { data: details }: { data: TPackage } = await getData(params.packageSlug)

    return (
        <main className="flex flex-col gap-y-16 relative pb-16">
            <Header />

            <section className="container mx-auto flex flex-col">
                <div className="flex justify-between items-center mb-8 px-10">
                    <span className="flex flex-col">
                        <h2 className="text-3xl font-bold">
                            {`${details.name}`}
                        </h2>
                        <span className="flex gap-x-2 items-center">
                            <svg
                                className="text-color1"
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    opacity="0.4"
                                    d="M17.6834 7.54167C16.8084 3.69167 13.45 1.95833 10.5 1.95833C10.5 1.95833 10.5 1.95833 10.4917 1.95833C7.55002 1.95833 4.18335 3.68333 3.30835 7.53333C2.33335 11.8333 4.96669 15.475 7.35002 17.7667C8.23335 18.6167 9.36668 19.0417 10.5 19.0417C11.6334 19.0417 12.7667 18.6167 13.6417 17.7667C16.025 15.475 18.6584 11.8417 17.6834 7.54167Z"
                                    className="fill-current"
                                />
                                <path
                                    d="M10.5 11.7167C11.9497 11.7167 13.125 10.5414 13.125 9.09167C13.125 7.64192 11.9497 6.46667 10.5 6.46667C9.05025 6.46667 7.875 7.64192 7.875 9.09167C7.875 10.5414 9.05025 11.7167 10.5 11.7167Z"
                                    className="fill-current"
                                />
                            </svg>
                            {`${details.city.name}`}</span>
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
                        <span className="font-bold">Rp {thousands(details.weddingTestimonials.length)}</span>
                    </span>
                </div>

                <Slides data={details.photos} title={details.name} isPopular={details.isPopular === 1} />
            </section>

            <section className="container mx-auto">
                <div className="flex gap-x-8 px-10">
                    <div className="w-8/12 flex flex-col gap-y-7">
                        <div className="flex flex-col">
                            <h6 className="font-bold text-xl">It{"'"}s a Good Package</h6>
                            <p className="leading-normal">{details.about}
                            </p>
                        </div>

                        <div className="flex flex-col gap-y-4">
                            <h6 className="font-bold text-xl">Bonus Included</h6>
                            {
                                details.weddingBonusPackages.map(bonus => {
                                    return <ContentBonus
                                        slugPackage={details.slug}
                                        key={bonus.id}
                                        data={bonus.bonusPackage} />
                                })
                            }
                        </div>

                        <div className="flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <h6 className="font-bold text-xl">Wedding Testimonials</h6>
                                <Link
                                    href="#"
                                    className="border border-dark1 px-5 py-3 rounded-full font-semibold hover:bg-color2 hover:border-none hover:text-light1"
                                >
                                    View Details
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-5">
                                {
                                    details.weddingTestimonials.map((testy) => {
                                        return <ContentTestimoni data={testy} key={testy.id} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-4/12">
                        <div className="sticky top-8">
                            <div className="border p-7 flex flex-col gap-y-5 rounded-2xl">
                                <h6 className="text-3xl text-color2 font-bold">Rp {thousands(details.price)}</h6>
                                <hr />
                                <ul className="flex flex-col gap-y-5 list-none">
                                    <li className="flex gap-x-3">
                                        <svg
                                            className="text-color2"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                opacity="0.4"
                                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                className="fill-current"
                                            />
                                            <path
                                                d="M10.5799 15.58C10.3799 15.58 10.1899 15.5 10.0499 15.36L7.21994 12.53C6.92994 12.24 6.92994 11.76 7.21994 11.47C7.50994 11.18 7.98994 11.18 8.27994 11.47L10.5799 13.77L15.7199 8.62998C16.0099 8.33998 16.4899 8.33998 16.7799 8.62998C17.0699 8.91998 17.0699 9.39998 16.7799 9.68998L11.1099 15.36C10.9699 15.5 10.7799 15.58 10.5799 15.58Z"
                                                className="fill-current"
                                            />
                                        </svg>
                                        <span className=""
                                        >Lorem ipsum dolor si amet nikah berkah dunia kita</span>                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            className="text-color2"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                opacity="0.4"
                                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                className="fill-current"
                                            />
                                            <path
                                                d="M10.5799 15.58C10.3799 15.58 10.1899 15.5 10.0499 15.36L7.21994 12.53C6.92994 12.24 6.92994 11.76 7.21994 11.47C7.50994 11.18 7.98994 11.18 8.27994 11.47L10.5799 13.77L15.7199 8.62998C16.0099 8.33998 16.4899 8.33998 16.7799 8.62998C17.0699 8.91998 17.0699 9.39998 16.7799 9.68998L11.1099 15.36C10.9699 15.5 10.7799 15.58 10.5799 15.58Z"
                                                className="fill-current"
                                            />
                                        </svg>
                                        <span className=""
                                        >Lorem ipsum dolor si amet nikah berkah dunia kita</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg
                                            className="text-color2"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                opacity="0.4"
                                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                                className="fill-current"
                                            />
                                            <path
                                                d="M10.5799 15.58C10.3799 15.58 10.1899 15.5 10.0499 15.36L7.21994 12.53C6.92994 12.24 6.92994 11.76 7.21994 11.47C7.50994 11.18 7.98994 11.18 8.27994 11.47L10.5799 13.77L15.7199 8.62998C16.0099 8.33998 16.4899 8.33998 16.7799 8.62998C17.0699 8.91998 17.0699 9.39998 16.7799 9.68998L11.1099 15.36C10.9699 15.5 10.7799 15.58 10.5799 15.58Z"
                                                className="fill-current"
                                            />
                                        </svg>
                                        <span className=""
                                        >Lorem ipsum dolor si amet nikah berkah dunia kita</span>
                                    </li>
                                </ul>
                                <hr />
                                <h6 className="font-bold">
                                    wedding organizers
                                </h6>
                                {/*
                                <div
                                    className="flex border border-light3 hover:border-color2 transition-colors duration-300 bg-light1 p-5 rounded-3xl items-center gap-x-5 relative"
                                >
                                    <span
                                        className="relative w-[80px] aspect-square rounded-full overflow-hidden"
                                    >
                                        <Image
                                            fill
                                            className="object-cover object-center"
                                            src={`${process.env.HOST_API}/storage/${details.thumbnail}`}
                                            alt={details.thumbnail}
                                            sizes="(max-width: 768px) 100vw"
                                        />
                                    </span>
                                    <span className="flex flex-col">
                                        <span className="text-xl font-bold"></span>
                                        <span className="">194 Packages</span>
                                    </span>
                                    <Link href="/organizers.html" className="absolute inset-0">
                                        
                                    </Link>
                                </div>*/}
                                <hr />
                                <Link
                                    href={`/packages/${details.slug}/checkout`}
                                    className="flex justify-center bg-color2 py-4 w-full text-light1 rounded-full"
                                >Choose This Package</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PackageDetailsPage
import React from 'react';
import { TPackage, TShow } from './types';
import { getData } from './action';
import Slider from '@/components/slider';
import Image from 'next/image';
import thousands from '@/libs/thousands';
import Link from 'next/link';

type PropsWeddingPackagesWrapper = {
    show: TShow,
    type: "grid" | "slider"
};

export function WeddingPackagesGrid({ data }: {
    data: TPackage[]
}) {
    return (<div className="grid grid-cols-4 gap-7">
        {
            data.map((weddingPackage) => {
                return (
                    <div key={weddingPackage.id} className="flex flex-col gap-y-2 relative">
                        <Link href={`${process.env.HOST_APP}/packages/${weddingPackage.slug}`} className="absolute inset-0 z-10">

                        </Link>
                        <span className="relative h-[300px] rounded-3xl overflow-hidden">
                            {
                                weddingPackage.isPopular === 1 && (
                                    <span className="absolute z-10 top-5 left-5">
                                        <span
                                            className="bg-color1 rounded-full text-light1 inline-flex gap-x-2 items-center text-sm py-1 px-3 uppercase"
                                        >
                                            <svg
                                                width="19"
                                                height="19"
                                                viewBox="0 0 19 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    opacity="0.4"
                                                    d="M13.0775 14.735H5.9225C5.6075 14.735 5.3225 14.5325 5.2175 14.24L2.0975 5.5025C1.85 4.805 2.645 4.2125 3.2375 4.64L6.2375 6.785C6.635 7.07 7.205 6.8975 7.3775 6.44L8.795 2.66C9.035 2.0075 9.9575 2.0075 10.1975 2.66L11.615 6.44C11.7875 6.905 12.35 7.07 12.755 6.785L15.755 4.64C16.355 4.2125 17.1425 4.8125 16.895 5.5025L13.775 14.24C13.6775 14.5325 13.3925 14.735 13.0775 14.735Z"
                                                    className="fill-current"
                                                />
                                                <path
                                                    d="M13.25 17H5.75C5.4425 17 5.1875 16.745 5.1875 16.4375C5.1875 16.13 5.4425 15.875 5.75 15.875H13.25C13.5575 15.875 13.8125 16.13 13.8125 16.4375C13.8125 16.745 13.5575 17 13.25 17Z"
                                                    className="fill-current"
                                                />
                                                <path
                                                    d="M11.375 11.5625H7.625C7.3175 11.5625 7.0625 11.3075 7.0625 11C7.0625 10.6925 7.3175 10.4375 7.625 10.4375H11.375C11.6825 10.4375 11.9375 10.6925 11.9375 11C11.9375 11.3075 11.6825 11.5625 11.375 11.5625Z"
                                                    className="fill-current"
                                                />
                                            </svg>
                                            Popular
                                        </span>
                                    </span>
                                )}
                            <Image
                                fill
                                className="w-full h-full object-cover object-center"
                                src={`${process.env.HOST_API}/storage/${weddingPackage.thumbnail}`}
                                alt={weddingPackage.name}
                                sizes="(max-width: 768px) 100vw"
                                priority
                            />
                        </span>
                        <h6 className="text-xl font-bold">
                            {weddingPackage.name}
                        </h6>
                        <span className="flex flex-col gap-[14px]">
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
                                {weddingPackage.city.name}
                            </span>
                            <span className="flex gap-x-2 items-center">
                            </span>
                        </span>
                        <span className="text-color2 font-bold">Rp {thousands(weddingPackage.price)}</span>
                    </div>
                )
            })
        }
    </div>
    )
}

export function WeddingPackagesSlider({ data }: {
    data: TPackage[]
}) {
    return <div className="relative">
        <Slider swiperClassName="w-full h-[480px]" swiperSliderClassName="-mx-10 px-12 xl:max-w-5xl 2xl:max-w-7xl">
            {
                data.map(slide => {
                    return <div key={slide.id} className="card-slide h-full rounded-3xl overflow-hidden relative">
                        <figure className="w-full h-full absolute">
                            <Image
                                fill
                                className="w-full h-full object-cover object-center"
                                src={`${process.env.HOST_API}/storage/${slide.thumbnail}`}
                                alt={slide.name}
                                sizes="(max-width: 768px) 100vw"
                                priority
                            />
                        </figure>
                        <div className="card-slide-content flex flex-col items-start gap-y-5">
                            <span className="bg-color1 rounded-full text-light1 inline-flex gap-x-2 items-center text-sm py-1 px-3 uppercase">
                                <svg
                                    width="19"
                                    height="19"
                                    viewBox="0 0 19 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        opacity="0.4"
                                        d="M13.0775 14.735H5.9225C5.6075 14.735 5.3225 14.5325 5.2175 14.24L2.0975 5.5025C1.85 4.805 2.645 4.2125 3.2375 4.64L6.2375 6.785C6.635 7.07 7.205 6.8975 7.3775 6.44L8.795 2.66C9.035 2.0075 9.9575 2.0075 10.1975 2.66L11.615 6.44C11.7875 6.905 12.35 7.07 12.755 6.785L15.755 4.64C16.355 4.2125 17.1425 4.8125 16.895 5.5025L13.775 14.24C13.6775 14.5325 13.3925 14.735 13.0775 14.735Z"
                                        className="fill-current"
                                    />
                                    <path
                                        d="M13.25 17H5.75C5.4425 17 5.1875 16.745 5.1875 16.4375C5.1875 16.13 5.4425 15.875 5.75 15.875H13.25C13.5575 15.875 13.8125 16.13 13.8125 16.4375C13.8125 16.745 13.5575 17 13.25 17Z"
                                        className="fill-current"
                                    />
                                    <path
                                        d="M11.375 11.5625H7.625C7.3175 11.5625 7.0625 11.3075 7.0625 11C7.0625 10.6925 7.3175 10.4375 7.625 10.4375H11.375C11.6825 10.4375 11.9375 10.6925 11.9375 11C11.9375 11.3075 11.6825 11.5625 11.375 11.5625Z"
                                        className="fill-current"
                                    />
                                </svg>
                                Popular
                            </span>
                            <span className="flex flex-col gap-y-1">
                                <h6 className="text-[28px] font-bold">
                                    {slide.name}
                                </h6>
                                <span className="text-xl text-color2 font-semibold">
                                    Rp {thousands(slide.price)}
                                </span>
                            </span>
                            <span className="flex gap-x-4">
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
                                    {slide.city.name}
                                </span>
                                {/*<span className="flex gap-x-2 items-center">
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
                                            d="M13.0083 12.7916V18.825L3.00834 18.8417V12.7916L3 11.5416V6.39165C3 5.83332 3.28335 5.31662 3.74168 5.00829L7.07501 2.7833C7.63335 2.4083 8.36665 2.4083 8.92499 2.7833L12.2583 5.00829C12.725 5.31662 13 5.83332 13 6.39165V11.5416L13.0083 12.7916Z"
                                            className="fill-current"
                                        />
                                        <path
                                            d="M18.8333 18.2083H17.7749V15.7083C18.5666 15.45 19.1416 14.7083 19.1416 13.8333V12.1667C19.1416 11.075 18.25 10.1833 17.1583 10.1833C16.0666 10.1833 15.1749 11.075 15.1749 12.1667V13.8333C15.1749 14.7 15.7416 15.4333 16.5166 15.7V18.2083H2.16663C1.82496 18.2083 1.54163 18.4917 1.54163 18.8333C1.54163 19.175 1.82496 19.4583 2.16663 19.4583H17.1083C17.125 19.4583 17.1333 19.4667 17.1499 19.4667C17.1666 19.4667 17.175 19.4583 17.1917 19.4583H18.8333C19.175 19.4583 19.4583 19.175 19.4583 18.8333C19.4583 18.4917 19.175 18.2083 18.8333 18.2083Z"
                                            className="fill-current"
                                        />
                                        <path
                                            d="M13.0083 12.7917H3.00834L3 11.5417H13L13.0083 12.7917Z"
                                            className="fill-current"
                                        />
                                        <path
                                            d="M8 19.4583C7.65833 19.4583 7.375 19.175 7.375 18.8333V15.7083C7.375 15.3667 7.65833 15.0833 8 15.0833C8.34167 15.0833 8.625 15.3667 8.625 15.7083V18.8333C8.625 19.175 8.34167 19.4583 8 19.4583Z"
                                            className="fill-current"
                                        />
                                        <path
                                            d="M7.99996 9.45833C8.80537 9.45833 9.45829 8.80541 9.45829 8C9.45829 7.19458 8.80537 6.54167 7.99996 6.54167C7.19454 6.54167 6.54163 7.19458 6.54163 8C6.54163 8.80541 7.19454 9.45833 7.99996 9.45833Z"
                                            className="fill-current"
                                        />
                                    </svg>
                                    {slide.weddingOrganizer.name}
                                </span>*/}
                            </span>
                            <Link
                                href={`${process.env.HOST_APP}/packages/${slide.slug}`}
                                className="flex justify-center bg-color2 py-2 w-full text-light1 rounded-full"
                            >
                                View Package
                            </Link>
                        </div>
                    </div>
                })
            }

        </Slider>
    </div>
}

async function WeddingPackagesWrapper({ show, type }: PropsWeddingPackagesWrapper) {
    const { data }: { data: TPackage[] } = await getData(show);

    if (type === "grid") {
        return <WeddingPackagesGrid data={data} />
    }

    if (type === "slider") {
        return <WeddingPackagesSlider data={data} />
    }
    return null;
}

export default WeddingPackagesWrapper
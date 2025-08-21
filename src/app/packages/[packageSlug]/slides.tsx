"use client"

import React, { useState } from 'react'
import Image from 'next/image'

type Props = {
    title: string;
    data: { id: number, photo: string }[];
    isPopular: boolean;
};

function Slides({ data, title, isPopular }: Props) {
    const photos = data.slice(0, 3)

    const [current, currentSet] = useState(photos[0].id)

    const currentPhoto = photos.find(photo => photo.id === current)

    return (
        <div className="grid grid-cols-4 gap-5 grid-rows-3 h-[550px] px-10">
            <div className="col-span-3 row-span-3">
                <span
                    className="flex relative w-full h-full rounded-2xl overflow-hidden"
                >
                    {
                        isPopular && (

                            <span className="absolute z-10 top-5 left-5">
                                <span
                                    className="bg-light1 rounded-full inline-flex gap-x-2 items-center text-sm py-1 px-3 font-bold uppercase"
                                >
                                    <svg
                                        className="text-color2"
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
                        )
                    }

                    <span className="absolute z-10 bottom-5 left-5">
                        <span
                            className="bg-light1 rounded-full inline-flex gap-x-2 items-center text-sm py-1 px-3 font-bold uppercase"
                        >
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
                                    d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                    className="fill-current"
                                />
                                <path
                                    d="M15.7999 2.20999C15.3899 1.79999 14.6799 2.07999 14.6799 2.64999V6.13999C14.6799 7.59999 15.9199 8.80999 17.4299 8.80999C18.3799 8.81999 19.6999 8.81999 20.8299 8.81999C21.3999 8.81999 21.6999 8.14999 21.2999 7.74999C19.8599 6.29999 17.2799 3.68999 15.7999 2.20999Z"
                                    className="fill-current"
                                />
                                <path
                                    d="M12.2799 14.72C11.9899 14.43 11.5099 14.43 11.2199 14.72L10.4999 15.44V11.25C10.4999 10.84 10.1599 10.5 9.74994 10.5C9.33994 10.5 8.99994 10.84 8.99994 11.25V15.44L8.27994 14.72C7.98994 14.43 7.50994 14.43 7.21994 14.72C6.92994 15.01 6.92994 15.49 7.21994 15.78L9.21994 17.78C9.22994 17.79 9.23994 17.79 9.23994 17.8C9.29994 17.86 9.37994 17.91 9.45994 17.95C9.55994 17.98 9.64994 18 9.74994 18C9.84994 18 9.93994 17.98 10.0299 17.94C10.1199 17.9 10.1999 17.85 10.2799 17.78L12.2799 15.78C12.5699 15.49 12.5699 15.01 12.2799 14.72Z"
                                    className="fill-current"
                                />
                            </svg>
                            BROCHURE .PDF
                        </span>
                    </span>

                    <span className="absolute z-10 bottom-5 right-5">
                        <span
                            className="bg-light1 rounded-full inline-flex gap-x-2 items-center text-sm py-1 px-3 font-bold uppercase"
                        >
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
                                    d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z"
                                    className="fill-current"
                                />
                                <path
                                    d="M14.9701 10.23L12.0701 8.56C11.3501 8.14 10.4801 8.14 9.76011 8.56C9.04011 8.98 8.61011 9.72 8.61011 10.56V13.91C8.61011 14.74 9.04011 15.49 9.76011 15.91C10.1201 16.12 10.5201 16.22 10.9101 16.22C11.3101 16.22 11.7001 16.12 12.0601 15.91L14.9601 14.24C15.6801 13.82 16.1101 13.08 16.1101 12.24C16.1301 11.4 15.7001 10.65 14.9701 10.23Z"
                                    className="fill-current"
                                />
                            </svg>
                            VIRTUAL 360
                        </span>
                    </span>

                    <Image
                        fill
                        className="object-cover object-center"
                        src={`${process.env.NEXT_PUBLIC_HOST_API}/storage/${currentPhoto?.photo}`}
                        alt={`${title} 0`}
                        sizes="(max-width: 768px) 100vw"
                    />
                </span>
            </div>

            {
                photos.map(photo => {
                    return <div key={photo.id} className="border-2 cursor-pointer border-transparent hover:border-color2 rounded-2xl overflow-hidden"
                        onClick={() => currentSet(photo.id)}
                    >
                        <span className="flex relative w-full h-full">
                            <Image
                                fill
                                className="object-cover object-center"
                                src={`${process.env.NEXT_PUBLIC_HOST_API}/storage/${photo.photo}`}
                                alt={`${title}-${photo.photo}`}
                                sizes="(max-width: 768px) 100vw"
                            />
                        </span>
                    </div>
                })
            }

        </div>
    )
}

export default Slides
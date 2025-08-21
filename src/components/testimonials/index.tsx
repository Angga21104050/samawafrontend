import React from 'react';
import { TTestimonial } from './types';
import { getData } from './action';
import Slider from '@/components/slider';
import Image from 'next/image';

export function Content({ data }: {
    data: TTestimonial
}) {
    return <div className="relative">
        <div className="swiper-slide w-[340px] -mx-2 px-6">
            <div className="flex flex-col border p-7 rounded-3xl gap-y-4">
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
                <p className="">
                    {data.message}
                </p>
                <span className="flex gap-x-4 items-center">
                    <span
                        className="relative w-[80px] aspect-square rounded-full overflow-hidden"
                    >
                        <Image
                            fill
                            className="object-cover object-center"
                            src={`${process.env.HOST_API}/storage/${data.photo}`}
                            alt={data.name}
                            sizes="(max-width: 768px) 100vw"
                        />
                    </span>
                    <span className="flex flex-col">
                        <span className="text-xl font-bold">{data.name}</span>
                        <span className="">{data.occupation}</span>
                    </span>
                </span>
            </div>
        </div>
    </div>
}

async function Testimonials() {
    const { data }: { data: TTestimonial[] } = await getData();
    return (
        <div className="relative pb-16">
            <Slider swiperClassName="w-full" swiperSliderClassName="!w-[340px]">
                {
                    data.map((testy) => {
                        return <Content key={testy.id} data={testy} />
                    })
                }
            </Slider>
        </div>
    )
}

export default Testimonials
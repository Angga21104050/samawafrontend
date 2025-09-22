"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { use } from 'react'
import { TBonus } from './type'
import thousands from '@/libs/thousands'
import { useParams } from 'next/navigation'
import useQueryParams from '@/libs/useQueryParams';
import { useRouter } from "next/navigation";

type TPropsContent = {
    data: TBonus,
    slugPackage?: string
}

export function Content({ data, slugPackage }: TPropsContent) {
    const params = useParams()
    const queryParams = useQueryParams()
    return (
        <div className="flex border p-5 gap-x-5 rounded-2xl items-center">
            <span
                className="flex w-44 aspect-video relative rounded-2xl overflow-hidden"
            >
                <Image
                    fill
                    className="object-cover object-center"
                    src={`${process.env.NEXT_PUBLIC_HOST_API}/storage/${data.thumbnail}`}
                    alt={data.name}
                    sizes="(max-width: 768px) 100vw"
                />
            </span>
            <div className="flex flex-col">
                <h6 className="text-xl font-bold">
                    {data.name}
                </h6>
                <span className="flex gap-x-2">
                    <span className="text-color2">
                        <span className="font-semibold">Rp 0</span>
                        <span className="">/package</span>
                    </span>
                    <span className="line-through">{thousands(data.price)}</span>
                </span>
            </div>
            <Link
                scroll={false}
                href={{
                    query:{
                        ...queryParams,
                        modal: 'bonus',
                        bonus: data.id,
                        slugPackage: params.slugPackage || slugPackage,
                    }
                }}
                className="border ml-auto border-dark1 px-5 py-3 rounded-full font-semibold hover:bg-color2 hover:border-none hover:text-light1"
            >
                View Details
            </Link>
        </div>
    )
}

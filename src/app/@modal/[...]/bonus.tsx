import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { TPackage } from '@/components/weddingPackages/types';
import thousands from '@/libs/thousands';
import { RouterBack } from '@/components/modal';

type Props = {
    bonusId: string;
    slugPackage: string;
}

async function getData(slug: string) {
    try {
        const req = await fetch(`${process.env.HOST_API}/api/wedding-package/${slug}`, {
            method: "GET",
        })

        return req.json()
    } catch (error) {
        console.log(error)
    }
}

async function Bonus({ bonusId, slugPackage }: Props) {
    const { data: details }: { data: TPackage } = await getData(slugPackage);

    const bonus = details.weddingBonusPackages.find(bonusPackage => String(bonusPackage.id) === bonusId);
    return (
        <div className="flex flex-col border p-5 gap-y-5 rounded-2xl">
            <span className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <Image
                    fill
                    className="object-cover object-center"
                    src={`${process.env.HOST_API}/storage/${bonus?.bonusPackage.thumbnail}`}
                    alt={bonus?.bonusPackage.name ?? "Bonus package image"}
                    sizes="(max-width: 768px) 100vw"
                />
            </span>
            <hr />
            <div className="flex flex-col">
                <h6 className="text-xl font-bold">Pre Post Wedding Photography Album</h6>
                <span className="flex gap-x-2">
                    <span className="text-color2">
                        <span className="font-semibold"> Rp 0 </span>
                        <span className=""> /package </span>
                    </span>
                    <span className="line-through">Rp {thousands(bonus?.bonusPackage.price)}</span>
                </span>
            </div>

            <hr />
            <div className="flex flex-col">
                <h6 className="font-bold text-xl">
                    {bonus?.bonusPackage.name}
                </h6>
                <p className="leading-normal">
                    {
                        bonus?.bonusPackage.about
                    }
                </p>
            </div>
            <hr />
            <span className="flex">
                <RouterBack className="border cursor-pointer border-dark1 px-5 py-3 rounded-full font-semibold">
                    Close Details
                </RouterBack>

            </span>
        </div>
    )
}

export default Bonus
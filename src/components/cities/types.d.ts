import { TPackage } from "@/components/weddingPackages/types";

export type TCity = {
    id: number,
    name: string,
    slug: string,
    icon: string,
    weddingPackages_count: number,
    weddingPackages: TPackage[]
};
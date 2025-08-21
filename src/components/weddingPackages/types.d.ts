import { TBonus } from "@/components/bonus/type";
import { TOrganizer } from "@/components/organizers/types";
import { TTestimonial } from "@/components/testimonials/types";
import { TCity } from "@/components/cities/types";

export type TShow = "popular" | "newest";

type TPackage = {
    id: number;
    name: string;
    slug: string;
    price: number;
    isPopular: 1 | 0;
    thumbnail: string;
    about: string;
    city: TCity;
    weddingOrganizer: TOrganizer;
    photos: { id: number, photo: string }[];
    weddingBonusPackages: { id: number, bonusPackage: TBonus }[];
    weddingTestimonials: TTestimonial[];
};
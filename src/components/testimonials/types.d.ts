import { TPackage } from "../weddingPackages/types";

/* eslint-disable @typescript-eslint/no-empty-object-type */
export type TTestimonial = {
    id: string,
    name: string,
    occupation: string,
    photo: string,
    message: string        
    weddingPackage: TPackage
};
import React from "react";
import { PreventScrolling } from "@/components/modal";
import { RouterBack } from "@/components/modal";

interface PageProps {
    searchParams: Promise<{ modal?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
    const params = await searchParams;   // ✅ tunggu resolve promise
    const modal = params.modal;          // ✅ ambil nilai modal

    if (modal && modal !== "") {
        return (
            <>
                <div className="fixed bg-black/80 z-50 inset-0 flex items-center justify-center">
                    <div className="bg-white max-w-xl p-4 rounded-2xl min-h-44 relative z-20">
                        {/* isi modal */}
                        <p>Modal aktif: {modal}</p>
                    </div>
                    <RouterBack />
                </div>
                <PreventScrolling />
            </>
        );
    }

    return null;
}

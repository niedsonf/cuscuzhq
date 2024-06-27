import { cn } from "@/utills/cn";
import Image, { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";

interface EventProps {
    image: StaticImageData;
    title: string;
    description: string;
}

export function Event({ image, title, description }: EventProps) {
    return (
        <div className="event group-hover:[&:not(&:hover)]:opacity-60 group/event first:rounded-l last:rounded-r">
            <Image
                width={200} height={200}
                src={image} alt="Ícone Travessa dos Artistas" />
            <div className="flex flex-col gap-8 max-w-[250px]">
                <h2 className='text-xl font-bold text-center text-gray-700'>{title}</h2>
                <span className="text-base text-center text-gray-700 text-balance">{description}</span>
            </div>
            <button className={cn(
                "absolute bottom-[-100%] transition-all group-hover/event:bottom-12 px-4 py-2 rounded",
                "bg-green-500 text-white text-base hover:bg-green-700"
            )}>
                Inscreva-se
            </button>
        </div>
    )
}
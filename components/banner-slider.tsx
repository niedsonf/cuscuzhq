'use client'

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import logo from '@/assets/logo.webp'
import clsx from "clsx"
import { DotButton, useDotButton } from "./embla-dot"
import Autoplay from 'embla-carousel-autoplay'

export function BannerSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    }, [Autoplay({ delay: 5000 })])

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    return (
        <section ref={emblaRef} className="overflow-hidden relative">
            <div className={clsx(
                "flex [&>div]:max-h-[600px]",
                "[&>div]:flex-[0_0_100%] [&>div]:min-w-0"
            )}>
                <div className="flex items-center justify-center bg-yellow-low h-[600px]">
                    <Image
                        src={logo}
                        alt="Bem-vindo ao CuscuzHQ"
                        width={400}
                        height={400} />
                </div>
                <div className="flex items-center justify-center bg-yellow-low h-[600px]">
                    <Image
                        src={logo}
                        alt="Bem-vindo ao CuscuzHQ"
                        width={400}
                        height={400} />
                </div>

            </div>
            <div className="flex gap-2 absolute bottom-2 left-1/2 -translate-x-1/2">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        aria-selected={index === selectedIndex}
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                    />
                ))}
            </div>
        </section>
    )
}
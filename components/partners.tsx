'use client'

import beejuh from '@/assets/partners/beejuh.webp'
import bgkstore from '@/assets/partners/bgk-store.webp'
import ggcon from '@/assets/partners/ggcon24.webp'
import mariabeads from '@/assets/partners/maria-beads.webp'
import metropoledigital from '@/assets/partners/metropole-digital.webp'
import mimos from '@/assets/partners/mimos.webp'
import oxentegeek from '@/assets/partners/oxente-geek.webp'
import parceriageek from '@/assets/partners/parceria-geek.webp'
import sugarmoon from '@/assets/partners/sugar-moon.webp'
import tapiocageek from '@/assets/partners/tapioca-geek.webp'
import ufrn from '@/assets/partners/ufrn.png'
import wanted from '@/assets/partners/wanted.webp'
import { cn } from '@/utills/cn'
import Image from 'next/image'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PartnersList = [
    {
        name: 'Parceria Geek',
        image: parceriageek,
        url: 'https://www.instagram.com/parceriageek/'
    },
    {
        name: 'Mimos',
        image: mimos,
        url: 'https://www.instagram.com/mimos/'
    },
    {
        name: 'Tapioca Geek',
        image: tapiocageek,
        url: 'https://www.instagram.com/tapiocageek/'
    },
    {
        name: 'Oxente Geek',
        image: oxentegeek,
        url: 'https://www.instagram.com/oxentegeek/'
    },
    {
        name: 'GGCon',
        image: ggcon,
        url: 'https://www.instagram.com/ggcon24/'
    },
    {
        name: 'Sugar Moon',
        image: sugarmoon,
        url: 'https://www.instagram.com/sugarmoon/'
    },
    {
        name: 'Maria Beads',
        image: mariabeads,
        url: 'https://www.instagram.com/mariabeads/'
    },
    {
        name: 'Beejuh',
        image: beejuh,
        url: 'https://www.instagram.com/beejuh_/'
    },
    {
        name: 'BGK Store',
        image: bgkstore,
        url: 'https://www.instagram.com/bgkstore/'
    },
    {
        name: 'Wanted',
        image: wanted,
        url: 'https://www.instagram.com/wanted/'
    },
    {
        name: 'Metropole Digital',
        image: metropoledigital,
        url: 'https://www.instagram.com/metropoledigital/'
    },
    {
        name: 'UFRN',
        image: ufrn,
        url: 'https://www.instagram.com/ufrn/'
    },
]

export function Partners() {

    // useGSAP(() => {
    //     gsap.registerPlugin(ScrollTrigger)
    //     gsap
    //         .timeline({
    //             scrollTrigger: {
    //                 trigger: '#partners',
    //                 start: 'top 50%',
    //                 end: 'bottom 100%',
    //                 scrub: true,
    //                 markers: true,
    //             }
    //         })
    //         .fromTo('#partners-items a', { opacity: 0, y: 100 }, { opacity: 1, y: 0, stagger: 1 })
    // })

    return (
        <section id='partners' className="py-14">
            <div className="flex flex-col gap-12 max-w-screen-xl mx-auto">
                <h1 className='text-center text-3xl font-bold tracking-wider drop-shadow-lg uppercase'>12ª Edição - Parcerias</h1>
                <div id='partners-items' className="grid place-items-center grid-cols-5 gap-y-12 group">
                    {
                        PartnersList.map(partner =>
                            <a
                                className={cn(
                                    'w-40 h-40 rounded-full overflow-hidden grid place-items-center transition-all duration-500',
                                    'group-hover:group-has-[a:hover]:[&:not(&:hover)]:opacity-60 group-hover:group-has-[a:hover]:[&:not(&:hover)]:scale-90'
                                )}
                                href={partner.url} key={partner.name} target='_blank'>
                                <Image
                                    width={160} height={160}
                                    src={partner.image} alt={partner.name} />
                            </a>
                        )
                    }
                </div>
            </div>
        </section>
    )
}
'use client'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AboutUs() {
    // gsap.registerPlugin(ScrollTrigger)

    // useGSAP((context, contextSafe) => {
    //     gsap.registerPlugin(ScrollTrigger)
    //     gsap
    //         .timeline({
    //             scrollTrigger: {
    //                 trigger: '#about-us-section',
    //                 start: 'top 50%',
    //                 end: 'bottom 80%',
    //                 scrub: true,
    //                 markers: true,
    //             }
    //         })
    //         .fromTo('#about-us-title', { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
    //         .fromTo('#about-us-content p', { opacity: 0, x: -100, stagger: 1 }, { opacity: 1, x: 0, stagger: 1  })

    // })

    return (
        <section id='about-us-section' className="py-14 bg-gradient-to-t from-[#f3a647] to-yellow-low animate-gradient">
            <div className="flex flex-col gap-12 max-w-screen-xl mx-auto text-gray-800">
                <h1 id='about-us-title' className="text-3xl font-bold tracking-wider drop-shadow-lg uppercase">O Cuscuz HQ</h1>
                <div className="flex justify-between text-justify text-base">
                    <div id='about-us-content' className="w-[48%] flex flex-col gap-4 font-[500]">
                        <p>Uma proposta idealizada por um coletivo de colecionadores de HQs na cidade de Natal – RN. O evento surgiu da necessidade que alguns colecionadores sentiam em compartilhar experiências e opiniões sobre os mais variados temas dos quadrinhos, sejam eles europeus, orientais, mainstream, infantis, independentes, Marvel, DC, Etc.</p>
                        <p>Seu objetivo consiste em incentivar e propagar a cultura da Nona Arte, e seus correlacionados, como forma artística fomentadora dos processos criativos éticos e sociais.</p>
                        <p>O encontro conta com palestras dos mais variados temas, agradando desde aquele fã iniciante, que não sabe a diferença entre Marvel e DC, até ao colecionador mais hardcore, que sabe até a cor dos olhos do 17º coadjuvante a aparecer em um gibi do Homem-Aranha.</p>
                        <p>O evento também recebe stands de lojas parceiras, exposição de miniaturas, oficinas, Cosplayers (e Cospobres), bingo, sorteios de brindes, entre outros.</p>
                        <p>Em uma de suas edições o CuscuzHQ teve a honra de contar com a presença de ilustres artistas, como o Gabriel Andrade, quadrinista que trabalhou em parceria com o proclamado roteirista e escritor inglês Alan Moore, na HQ ‘’One Crossed’’, que rendeu um bate-papo com os participantes do evento, explicando seu processo de trabalho, trajetória profissional e como é trabalhar com um dos maiores autores de Graphic Novels dos dias atuais.</p>
                        <p>Pensando na proximidade dos fãs com o mundo das HQs e seus produtores, desde a sétima edição foi instituído dentro do evento o espaço conhecido como “Travessa dos Artistas”, onde os quadrinistas e autores locais expõem seus trabalhos.</p>
                    </div>
                    <div className='w-[48%]'>

                    </div>
                </div>
            </div>
        </section>
    )
}
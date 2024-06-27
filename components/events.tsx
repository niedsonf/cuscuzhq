import pencil from '@/assets/events/pencil-lamp.webp'
import trophy from '@/assets/events/trophy.webp'
import signup from '@/assets/events/sign-up.webp'
import { Event } from './event'

export function Events() {
    return (
        <section className="py-14">
            <div className="flex flex-col gap-12 max-w-screen-xl mx-auto">
                <h1 className='text-center text-3xl font-bold tracking-wider drop-shadow-lg uppercase'>EDITAIS E LINKS</h1>
                <div className="flex gap-2 group">
                    <Event
                        title='Travessa dos Artistas'
                        image={pencil}
                        description='Espaço destinado para o artista mostrar seu trabalho.' />
                    <Event
                        title='Concurso Cospobre'
                        image={trophy}
                        description='Solte sua criatividade e participe do nosso concurso.' />
                    <Event
                        title='Credenciamento'
                        image={signup}
                        description='Faça sua inscrição para garantir a participação nos sorteios e ganhar brindes.' />
                </div>
            </div>
        </section>
    )
}
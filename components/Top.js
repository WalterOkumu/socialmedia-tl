import Image from "next/image";

const Top = () => {

    const media = "/social-media.png";

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse gap-16 pb-8 text-[#f8f8ff]">
                <div className="md:w-1/2 w-full md:mt-24">
                    <h1 className="text-5xl font-bold md:w-[30rem]">Gestão de Redes Sociais</h1> 
                    <p className="mt-4 mb-4 md:w-96 text-3xl font-light italic">
                       O que prometemos? Mais que likes, <span className="font-bold">uma gestão estratégica das suas redes sociais!</span>
                    </p>
                    <p className="mb-4 md:w-96 text-justify font-medium">
                       Gerir as suas Redes Socias produzindo conteúdos de acordo com uma linha de orientação e um cronograma pré-estabelecidos, assim para aumentar e fidelizar o vosso número de seguidores online.
                    </p>
                    <p className="mb-4 md:w-96 text-justify font-medium">
                       Informar e instruir os seguidores online quanto aos vossos serviços e produtos, missão, visão, princípios e valores para aumentar o tráfego do vosso website. 
                    </p>
                </div>

                <Image src={media} width={1090} height={1000} alt="Black Friday" className="object-contain md:w-1/2 w-full"/>
            </div>
        </div>
    )

}

export default Top;
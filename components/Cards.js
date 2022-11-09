const Cards = () => {

    return (
        <div className="pt-28 mx-auto">
            <h3 className="text-3xl md:text-5xl font-bold text-center pb-10">O que oferecemos</h3>
            <div className="mt-6 flex md:flex-row flex-col mx-auto justify-center items-center gap-8 w-full">
                <div className="bg-[#FBED04] p-4 text-center leading-relaxed rounded-md w-3/5 md:w-[18rem] h-[20'rem] border cursor-pointer hover:shadow-xl duration-500 ease-out">
                    <p className="font-bold mb-2 text-lg">Um Plano de Marketing Digital</p>
                    <p className="text-base">Propõe-se um plano de Marketing Digital que espelha os objectivos, a missão, avisão, os princípios e valores da empresa/instituição/organização. Esse plano será delineado em estreita articulação com a vossa equipa de comunicação e marketing ou com o responsável por essa área.</p>
                </div>

                <div className="bg-[#FBED04] p-4 text-center rounded-md w-3/5 md:w-[18rem] h-[20rem] border cursor-pointer hover:shadow-xl duration-500 ease-out">
                    <p className="font-bold text-center leading-relaxed mb-2 text-lg">Um Produtor de conteúdos</p>
                    <p className="text-base">
                        Disponibiliza-se um produtor de conteúdos, que fará a gestão dos conteúdos acordados, conforme linhas de orientação e um cronograma de acção pré-definido. O referido produtor de conteúdos funcionará como ponto focal com a empresa/instituição/organização.</p>
                </div>

                <div className="bg-[#FBED04] p-4 text-center rounded-md w-3/5 md:w-[18rem] h-[20rem] border cursor-pointer hover:shadow-xl duration-500 ease-out">
                    <p className="font-bold text-center leading-relaxed mb-2 text-lg">Um Designer</p>
                    <p className="text-base">Disponibiliza-se um designer, responsável pela concepção e pelo design das artes gráficas que acompanharão as publicações.</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;
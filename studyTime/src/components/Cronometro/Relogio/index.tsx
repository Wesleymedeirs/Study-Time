interface RelogioProps {
    tempo?: number
}


const Relogio = ({ tempo = 0 }: RelogioProps) => {
    const minutos = Math.floor(tempo / 60);;
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0')
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0')
    
    return (
        <>
            <span className="bg-slate-500 w-3 px-2 rounded-lg m-1 text-5xl text-gray-100" >{minutoDezena}</span>
            <span className="bg-slate-500 w-3 px-2 rounded-lg text-5xl text-gray-100">{minutoUnidade}</span>
            <span className="ml-1 text-5xl text-gray-100 font-bold">:</span>
            <span className="bg-slate-500 w-3 px-2 rounded-lg m-1 text-5xl text-gray-100">{segundoDezena}</span>
            <span className="bg-slate-500 w-3 px-2 rounded-lg text-5xl text-gray-100" >{segundoUnidade}</span>
        </>

    )
}

export default Relogio
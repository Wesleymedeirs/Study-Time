import { useEffect, useState } from "react"
import TempoParaSegundos from "../../common/utils/time"
import { ITarefas } from "../../Types/ITafera"
import Botao from "../Botao"
import Relogio from "./Relogio"

interface CronometroProps {
    selecionado: ITarefas | undefined
    finalizarTarefa: () => void
}

const Cronometro = ({ selecionado, finalizarTarefa }: CronometroProps) => {

    const [tempo, setTempo] = useState<number>()

    useEffect(() => {
        if (selecionado?.tarefa) {
            setTempo(TempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    const regressiva = (contador: number = 0) => {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1)
                return regressiva(contador - 1)
            }
            finalizarTarefa()
        }, 1000);
    }
    return (
        <>
            <p className='flex flex-col items-center text-gray-200 p-4 text-xl'>Escolha um card e inicie o cronômetro</p>
            <div className='flex flex-col items-center p-5 bg-gray-400 min-w-44 rounded-lg'>
                <div >
                    <Relogio tempo={tempo} />
                </div>
            </div>
            <div className="pt-1 min-w-14">
                <Botao onClick={() => regressiva(tempo)}>
                    Iniciar!
                </Botao>
            </div>
        </>
    )
}

export default Cronometro
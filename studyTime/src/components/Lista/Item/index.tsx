import { ITarefas } from "../../../Types/ITafera"

//reaproveitando interface com extends
interface ItemProps extends ITarefas {

    selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

const Item = ({ tarefa, tempo, selecionado, completado, id, selecionaTarefa }: ItemProps) => {

    return (
        <li
            className={`bg-gray-600 mb-2 w-full rounded-lg p-1 text-gray-100 hover:cursor-pointer mr-20 ${selecionado ? 'bg-sky-900 text-black' : ''} ${completado ? 'bg-green-900 text-gray-400' : ''}`}
            onClick={() => !completado && selecionaTarefa({
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            })}
        >
            <h3>{tarefa}</h3>
            <span className={`text-gray-400 ${selecionado ? 'bg-sky-900 text-gray-400' : ''} ${completado ? 'bg-green-900 text-gray-400' : ''}`}>{tempo}</span>
        </li>
    )
}

export default Item
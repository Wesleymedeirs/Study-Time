import { ITarefas } from "../../Types/ITafera"
import Item from "./Item"

interface ListaProps {
    tarefas: ITarefas[]
    selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

const Lista = ({tarefas, selecionaTarefa}:ListaProps) => {
   
    return (
        <aside className="bg-gray-400 rounded-lg min-w-40 ml-14">
            <h2 className="my-4 text-gray-100 pl-2 text-xl flex justify-center">Estudos do dia</h2>
            <ul className="flex flex-col mx-4 ">
                {tarefas.length === 0 ? <p className="text-xs flex justify-center text-zinc-700">Sem informações</p> : tarefas.map((item) => (
                    <Item 
                    selecionaTarefa={selecionaTarefa}
                    key={item.id} 
                    {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista
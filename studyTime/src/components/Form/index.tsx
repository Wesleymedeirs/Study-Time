import { useState } from 'react'
import Botao from '../Botao'
import { ITarefas } from '../../Types/ITafera';
import {v4 as uuidv4} from 'uuid'

interface FormProps {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>;
}

const Form = ({ setTarefas }: FormProps) => {
    const [state, setState] = useState({
        tarefa: "",
        tempo: "00:00"
    })

    const hundleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTarefas(tarefasAntigas =>
            [
                ...tarefasAntigas,
                { 
                    ...state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ])

        setState({
            tarefa: '',
            tempo: '00:00'
        })
    }

    return (
        <form onSubmit={hundleSave} className='flex flex-col w-full min-w-44 items-cente bg-gray-400 rounded-lg p-2'>
            <label htmlFor="tarefa" className='text-gray-100 text-xl'>
                Adicione um novo estudo
            </label>
            <input
                type="text"
                name='tarefa'
                id='tarefa'
                required
                value={state.tarefa}
                onChange={(e) => setState({ ...state, tarefa: e.target.value })}
                placeholder='O que você quer estudar?'
                className='input' />

            <label htmlFor="tempo" className='text-gray-100 text-xl'>
                Tempo
            </label>
            <input
                type="time"
                step='1'
                name='tempo'
                required id='tempo'
                value={state.tempo}
                onChange={(e) => setState({ ...state, tempo: e.target.value })}
                min='00:00:00'
                max='01:30:00'
                className='input' />

            <Botao type='submit'>
                Cadastrar
            </Botao>
        </form>
    )
}

export default Form
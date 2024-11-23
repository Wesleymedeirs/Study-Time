import { useState } from 'react'
import Cronometro from './components/Cronometro'
import Form from './components/Form'
import Lista from './components/Lista'
import { ITarefas } from './Types/ITafera';

function App() {
  const [tarefas, setTarefas] = useState<ITarefas[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefas>()

  const selecionaTarefa = (tarefaSelecionada: ITarefas) => {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }
  
  const finalizarTarefa = () => {
    setSelecionado(undefined)
      if(selecionado){
        setTarefas(tarefasAnteriores => tarefasAnteriores.map((tarefa) => {
          if(tarefa.id === selecionado.id){
            return {
              ...tarefa,
              selecionado: false,
              completado:true
            }
          }
          return tarefa
        }) )
      }
  }
  return (
    <div className='bg-gray-900 m-20 p-20 rounded-xl'>
      <div className='flex justify-between'>
        <Form setTarefas={setTarefas} />
        <Lista
          tarefas={tarefas}
          selecionaTarefa={selecionaTarefa}
        />
      </div>
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
    </div>
  )
}

export default App

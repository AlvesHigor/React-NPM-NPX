import Task from './Task'

function App() {

  const tasks = [
    'Lavar o carro',
    'Ir no mercado',
    'Burscar o cachorro no petshop'
  ];

  return <>
    <h1>Todo List</h1>
    {tasks.map((value) => {
      return <>
        <Task text={value} />
        <br />
      </>;
    })}
    <Task text="Titulo da tarefa" />

  </>;
}

export default App;

import { useState } from "react"
import './App.css';
import Todo from "./components/Todo";
import Adicionando from "./components/Adicionando";


function App() {

  const [todo, setTodo] = useState([

    {
      id: 1,
      text: 'Criar funcionalidade X no sistema',
      categoria: 'Trabalho',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Ir para academia',
      categoria: 'Pessoal',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Estudar React',
      categoria: 'Estudo',
      isCompleted: false,
    },

  ]);


  //Vai precisar passar addTodo como props para o formulário.
  const addTodo = (text, categoria) => { //função que vai adicionar na lista

    const newTodo = [ //Array que recebe por spread todos os TODO atuais, em um novo TODO, que é um pbjeto.
      ...todo, 
      {
        id: Math.floor(Math.random() * 10000), //id vai ser um número aleátorio
        text,        //Vai vim do componente do formulário
        categoria,   //Vai vim do componente do formulário
        isCompleted: false,
      },
    ];
      setTodo(newTodo); //Vai atualizar a lista com os novos valores.
  };

  const removeTodo = (id) => { //Vai usar o id pra saber qual vai remover da lista

    const newTodo = [...todo]  //Filter não altera o array original

    const filteredTodo = newTodo.filter(todo =>
       todo.id !== id ? todo : null //todo.id tiver o id diferente do id informado vai ser retornado, já o todo.id que tiver o id igual vai retornar como null
      );
    setTodo(filteredTodo); //=> Está atualizando o state

  }

  const completeTodo = (id) => { //Diferente do filter o map modifica o array original

    const newTodo = [...todo]

    newTodo.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo) //se id for igual a id vai mudar o isCompleted para o contrário e se não for o id igual vai retornar o todo

    setTodo(newTodo); //=> Está atualizando o state

  }
  

  return (
   
    <div className="app">
      <h1>Lista de Tarefas</h1>
        <div className="todo-list">
          {todo.map((todo) => (
            <div className="todo">
               <div className="content">
                <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
              </div>
            </div>         
          ))}
        </div>
        <Adicionando addTodo={addTodo}/> {/* Está passando para o Adicionando */}
    </div>
  );
};

export default App

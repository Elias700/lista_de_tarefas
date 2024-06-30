import React from 'react'

const Todo = ({todo, removeTodo, completeTodo}) => {

  return (

    <div>
      
      <div className="corpo" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}> {/* Vai alterar baseado no  todo.isCpmpleted, se estiver true vai ter o valor de line-through, se não coloca nada */}
        <p>{todo.text}</p>
        <p>({todo.categoria})</p>
            <div className="botoes">
                <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
                <button className='remove' onClick={() => removeTodo(todo.id)}>X</button>
            </div>
        </div>

    </div>

  )
}

export default Todo

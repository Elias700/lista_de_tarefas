import React, { useState } from 'react'

const Adicionando = ({addTodo}) => {

    const [value, setValue] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();

        if(!value || !categoria) return; /* Se não tiver value OU não tiver categoria retona e não vai seguir essa função */

        addTodo(value, categoria); //Está adicionando os valores na lista

        console.log(value, categoria);  

        /* Se os valores forem preenchidos vai executar uma função para adicionar todo e limpar os campos */

        setValue('');      //==>    vai poder manipular o valor que vai ser digitado.
        setCategoria('');  //==>    vai poder manipular o valor que vai ser digitado.

        //Para limpar os campos vai precisar atribuir o state para o atributo de valor do input, ex: no input vai botar value={value}, no select vai ser value={category}
    };

  return (

    <div className='todo-form'>

        <h2>Criar tarefa:</h2>

        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={value}
            placeholder='Digite o título'
            onChange={(e) => setValue(e.target.value)}/> {/* onChange vai capturar o argumento de evento, e o setValue vai ser e(evento, target(input) e value(que é o valor do input)) */}

            <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trbalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>

            <button type='submit' className='buttonEnvio'> Criar tarefa </button>
        </form>

    </div>

  )
}

export default Adicionando

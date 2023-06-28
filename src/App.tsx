import { useState } from 'react'
import { Todos } from './components/Todos'
import { type Todo as TodoType, type TodoId } from './types'

const mockTodos = [
  {
    id: '1',
    title: 'Comprar dulces para fiesta',
    completed: true,
  },
  {
    id: '2',
    title: 'Tomar leccion de ingles',
    completed: false,
  },
  {
    id: '3',
    title: 'Ver Kimi no na wa',
    completed: false,
  },
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleComplete = ({
    id,
    completed,
  }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos
        onRemuveTodo={handleRemove}
        onToggleCompleted={handleComplete}
        todos={todos}
      />
    </div>
  )
}

export default App

import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemuveTodo: ({ id }: TodoId) => void
  onToggleCompleted: ({
    id,
    completed,
  }: Pick<TodoType, 'id' | 'completed'>) => void
}
export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemuveTodo,
  onToggleCompleted,
}) => {
  const handleChangeCheckBox = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    onToggleCompleted({ id, completed: event.target.checked })
  }
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={handleChangeCheckBox}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemuveTodo({ id })
        }}
      />
    </div>
  )
}

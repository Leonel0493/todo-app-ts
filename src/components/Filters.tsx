import { TODO_FILTERS, FILTERS_BUTTONS } from '../consts'
import { type FilterValues } from '../types'

interface Props {
  filterSelected: FilterValues
  onFilterChange: (filter: FilterValues) => void
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange,
}) => {
  const handleClick = (filter: FilterValues) {
    
  }
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected
        const className = isSelected ? 'selected' : ''
        return (
          <li key={key}>
            <a href={href} className={className} onClick={handleClick(key)}>
              {literal}
            </a>
          </li>
        )
      })}
      <li>
        <a
          className={`${filterSelected === 'all' ? 'selectd' : ''}`}
          onClick={() => {
            onFilterChange('all')
          }}
        >
          Todos
        </a>
      </li>
      <li>
        <a
          className={`${filterSelected === 'active' ? 'selectd' : ''}`}
          onClick={() => {
            onFilterChange('active')
          }}
        >
          Activos
        </a>
      </li>
      <li>
        <a
          className={`${filterSelected === 'completed' ? 'selectd' : ''}`}
          onClick={() => {
            onFilterChange('completed')
          }}
        >
          Completados
        </a>
      </li>
    </ul>
  )
}

const FILTERS = ['all', 'active', 'done']

function FilterBar({ filter, onChange }) {
  return (
    <div className="filters">
      {FILTERS.map((f) => (
        <button
          key={f}
          className={f === filter ? 'selected' : ''}
          onClick={() => onChange(f)}
        >
          {f}
        </button>
      ))}
    </div>
  )
}

export default FilterBar

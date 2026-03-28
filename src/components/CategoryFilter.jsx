function CategoryFilter({ categories, value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="category-select"
    >
      <option value="">Alla kategorier</option>
      {categories.map((cat, i) => (
        <option key={`${cat}-${i}`} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  )
}

export default CategoryFilter

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Sök på titel..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-input"
    />
  )
}

export default SearchBar

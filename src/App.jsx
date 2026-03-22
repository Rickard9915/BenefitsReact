import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [benefits, setBenefits] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    fetch('http://localhost:5062/api/benefits')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        setBenefits(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Kunde inte hämta förmåner. Kontrollera att BenefitsService körs på http://localhost:5062.')
        setLoading(false)
      })
  }, [])

  const categories = [...new Set(benefits.map((b) => b.category?.name).filter(Boolean))]

  const filtered = benefits.filter((b) => {
    const matchesSearch = b.title?.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === '' || b.category?.name === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="app">
      <header className="app-header">
        <h1>Förmåner</h1>
      </header>

      <div className="filters">
        <input
          type="text"
          placeholder="Sök på titel..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          <option value="">Alla kategorier</option>
          {categories.map((cat, i) => (
            <option key={`${cat}-${i}`} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {loading && (
        <div className="status-box loading">
          <div className="spinner" />
          <p>Laddar förmåner...</p>
        </div>
      )}

      {error && (
        <div className="status-box error">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && filtered.length === 0 && (
        <div className="status-box empty">
          <p>Inga förmåner matchar din sökning.</p>
        </div>
      )}

      <div className="benefits-grid">
        {filtered.map((benefit) => (
          <div key={benefit.id} className="benefit-card">
            <div className="card-header">
              <h2 className="card-title">{benefit.title}</h2>
              {benefit.category && (
                <span className="card-category">{benefit.category?.name}</span>
              )}
            </div>
            <p className="card-description">{benefit.description}</p>
            <div className="card-value">
              {benefit.value != null ? `${benefit.value} kr` : '–'}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

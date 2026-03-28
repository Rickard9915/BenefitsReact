import { useState, useEffect } from 'react'
import './App.css'
import BenefitCard from './components/BenefitCard'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'

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
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter categories={categories} value={selectedCategory} onChange={setSelectedCategory} />
      </div>

      {loading && <LoadingSpinner />}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && filtered.length === 0 && (
        <div className="status-box empty">
          <p>Inga förmåner matchar din sökning.</p>
        </div>
      )}

      <div className="benefits-grid">
        {filtered.map((benefit) => (
          <BenefitCard key={benefit.id} benefit={benefit} />
        ))}
      </div>
    </div>
  )
}

export default App

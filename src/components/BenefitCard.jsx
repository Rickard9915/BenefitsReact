function BenefitCard({ benefit }) {
  return (
    <div className="benefit-card">
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
  )
}

export default BenefitCard

function RingkasanTerrarium({ total, normal, perluPerhatian, rataSuhu }) {
  return (
    <section className="ringkasan">
      <div className="ringkasan-item">
        <span className="angka">{total}</span>
        <span className="label">Total Terrarium</span>
      </div>
      <div className="ringkasan-item">
        <span className="angka ok">{normal}</span>
        <span className="label">Kondisi Normal</span>
      </div>
      <div className="ringkasan-item">
        <span className="angka warn">{perluPerhatian}</span>
        <span className="label">Perlu Perhatian</span>
      </div>
      <div className="ringkasan-item">
        <span className="angka">{rataSuhu}°C</span>
        <span className="label">Rata-rata Suhu</span>
      </div>
    </section>
  )
}

export default RingkasanTerrarium

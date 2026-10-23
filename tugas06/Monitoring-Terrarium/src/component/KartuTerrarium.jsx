function KartuTerrarium({
  nama,
  penghuni,
  suhu,
  kelembapan,
  suhuMin,
  suhuMax,
  kelembapanMin,
  kelembapanMax,
}) {
  const suhuNormal = suhu >= suhuMin && suhu <= suhuMax
  const lembapNormal = kelembapan >= kelembapanMin && kelembapan <= kelembapanMax
  const normal = suhuNormal && lembapNormal

  return (
    <article className={`kartu ${normal ? 'kartu-normal' : 'kartu-warn'}`}>
      <div className="kartu-atas">
        <div>
          <h3>{nama}</h3>
          <p className="penghuni">{penghuni}</p>
        </div>
        <span className={`badge ${normal ? 'badge-ok' : 'badge-warn'}`}>
          {normal ? 'Normal' : 'Perlu Perhatian'}
        </span>
      </div>

      <div className="pengukuran">
        <div className={suhuNormal ? '' : 'di-luar-batas'}>
          <span className="nilai"> {suhu}°C</span>
          <span className="rentang">
            Ideal {suhuMin}–{suhuMax}°C
          </span>
        </div>
        <div className={lembapNormal ? '' : 'di-luar-batas'}>
          <span className="nilai"> {kelembapan}%</span>
          <span className="rentang">
            Ideal {kelembapanMin}–{kelembapanMax}%
          </span>
        </div>
      </div>
    </article>
  )
}

export default KartuTerrarium

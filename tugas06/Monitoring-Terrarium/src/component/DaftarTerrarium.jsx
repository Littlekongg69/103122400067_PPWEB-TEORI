import KartuTerrarium from './KartuTerrarium'

function DaftarTerrarium({ daftar, pesanKosong = 'Belum ada data terrarium' }) {
  if (daftar.length === 0) {
    return <p className="kosong">{pesanKosong}</p>
  }

  return (
    <section className="daftar">
      {daftar.map((item) => (
        <KartuTerrarium
          key={item.id}
          nama={item.nama}
          penghuni={item.penghuni}
          suhu={item.suhu}
          kelembapan={item.kelembapan}
          suhuMin={item.suhuMin}
          suhuMax={item.suhuMax}
          kelembapanMin={item.kelembapanMin}
          kelembapanMax={item.kelembapanMax}
        />
      ))}
    </section>
  )
}

export default DaftarTerrarium

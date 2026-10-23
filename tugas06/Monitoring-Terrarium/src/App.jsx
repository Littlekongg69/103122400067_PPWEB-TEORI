import { useState } from 'react'
import Header from './component/Header'

import './App.css'

const dataAwal = [
  {
    id: 1,
    nama: 'Terrarium Gecko Utama',
    penghuni: 'Leopard Gecko',
    suhu: 31.5,
    kelembapan: 38,
    suhuMin: 26,
    suhuMax: 32,
    kelembapanMin: 30,
    kelembapanMax: 40,
  },
  {
    id: 2,
    nama: 'Terrarium Tropis Katak',
    penghuni: 'Katak Pohon Hijau (Litoria caerulea)',
    suhu: 27.2,
    kelembapan: 82,
    suhuMin: 24,
    suhuMax: 29,
    kelembapanMin: 60,
    kelembapanMax: 80,
  },
  {
    id: 3,
    nama: 'Terrarium Lumut Mini',
    penghuni: 'Lumut dan Pakis Mini',
    suhu: 23.8,
    kelembapan: 85,
    suhuMin: 20,
    suhuMax: 26,
    kelembapanMin: 70,
    kelembapanMax: 90,
  },
  {
    id: 4,
    nama: 'Terrarium Ball Python',
    penghuni: 'Ball Python',
    suhu: 33.6,
    kelembapan: 58,
    suhuMin: 27,
    suhuMax: 32,
    kelembapanMin: 50,
    kelembapanMax: 60,
  },
]

const daftarMenu = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'semua', label: 'Semua Terrarium' },
  { id: 'tambah', label: 'Tambah Terrarium' },
  { id: 'perhatian', label: 'Perlu Perhatian' },
  { id: 'tentang', label: 'Tentang' },
]

function kondisiNormal(t) {
  return (
    t.suhu >= t.suhuMin &&
    t.suhu <= t.suhuMax &&
    t.kelembapan >= t.kelembapanMin &&
    t.kelembapan <= t.kelembapanMax
  )
}

function App() {
  const [daftarTerrarium, setDaftarTerrarium] = useState(dataAwal)
  const [menuAktif, setMenuAktif] = useState('beranda')

  function tambahTerrarium(dataBaru) {
    setDaftarTerrarium([...daftarTerrarium, { id: Date.now(), ...dataBaru }])
    setMenuAktif('semua')
  }

  const total = daftarTerrarium.length
  const normal = daftarTerrarium.filter(kondisiNormal).length
  const perluPerhatian = daftarTerrarium.filter((t) => !kondisiNormal(t))
  const rataSuhu =
    total === 0
      ? 0
      : (daftarTerrarium.reduce((jumlah, t) => jumlah + t.suhu, 0) / total).toFixed(1)

  return (
    <div className="app">
      <Header
        judul="Monitoring Terrarium"
        subjudul="Pantau suhu dan kelembapan setiap terrarium agar tetap dalam rentang ideal."
      />
      <Navbar daftarMenu={daftarMenu} menuAktif={menuAktif} onPilih={setMenuAktif} />

      {menuAktif === 'beranda' && (
        <>
          <RingkasanTerrarium
            total={total}
            normal={normal}
            perluPerhatian={perluPerhatian.length}
            rataSuhu={rataSuhu}
          />
          <h2 className="judul-bagian">Terrarium Terbaru</h2>
          <DaftarTerrarium daftar={daftarTerrarium.slice(-3).reverse()} />
        </>
      )}

      {menuAktif === 'semua' && <DaftarTerrarium daftar={daftarTerrarium} />}

      {menuAktif === 'tambah' && <FormTambahTerrarium onTambah={tambahTerrarium} />}

      {menuAktif === 'perhatian' && (
        <DaftarTerrarium
          daftar={perluPerhatian}
          pesanKosong="Tidak ada terrarium yang perlu perhatian"
        />
      )}

      {menuAktif === 'tentang' && <Tentang />}
    </div>
  )
}

export default App

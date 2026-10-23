import { useState } from 'react'

const formAwal = {
  nama: '',
  penghuni: '',
  suhu: '',
  kelembapan: '',
  suhuMin: '',
  suhuMax: '',
  kelembapanMin: '',
  kelembapanMax: '',
}

function FormTambahTerrarium({ onTambah }) {
  const [form, setForm] = useState(formAwal)

  function handleChange(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.nama.trim() || !form.penghuni.trim()) return

    onTambah({
      nama: form.nama.trim(),
      penghuni: form.penghuni.trim(),
      suhu: Number(form.suhu),
      kelembapan: Number(form.kelembapan),
      suhuMin: Number(form.suhuMin),
      suhuMax: Number(form.suhuMax),
      kelembapanMin: Number(form.kelembapanMin),
      kelembapanMax: Number(form.kelembapanMax),
    })
    setForm(formAwal)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tambah Terrarium</h2>

      <div className="form-grid">
        <label className="penuh">
          Nama terrarium
          <input
            name="nama"
            value={form.nama}
            onChange={handleChange}
            placeholder="contoh: Terrarium Gecko Utama"
            required
          />
        </label>
        <label className="penuh">
          Penghuni
          <input
            name="penghuni"
            value={form.penghuni}
            onChange={handleChange}
            placeholder="contoh: Leopard Gecko"
            required
          />
        </label>

        <label>
          Suhu saat ini (°C)
          <input type="number" step="0.1" name="suhu" value={form.suhu} onChange={handleChange} required />
        </label>
        <label>
          Kelembapan saat ini (%)
          <input type="number" step="1" name="kelembapan" value={form.kelembapan} onChange={handleChange} required />
        </label>

        <label>
          Suhu minimum ideal (°C)
          <input type="number" step="0.1" name="suhuMin" value={form.suhuMin} onChange={handleChange} required />
        </label>
        <label>
          Suhu maksimum ideal (°C)
          <input type="number" step="0.1" name="suhuMax" value={form.suhuMax} onChange={handleChange} required />
        </label>

        <label>
          Kelembapan minimum ideal (%)
          <input type="number" step="1" name="kelembapanMin" value={form.kelembapanMin} onChange={handleChange} required />
        </label>
        <label>
          Kelembapan maksimum ideal (%)
          <input type="number" step="1" name="kelembapanMax" value={form.kelembapanMax} onChange={handleChange} required />
        </label>
      </div>

      <button type="submit">Tambah</button>
    </form>
  )
}

export default FormTambahTerrarium

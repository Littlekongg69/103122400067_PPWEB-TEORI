# 🌿 Terratech Hub — Micro-Habitat & Terrarium Automation System

Terratech Hub adalah antarmuka web monitoring dan manajemen otomatisasi untuk ekosistem tertutup (bioaktif vivarium, paludarium, dan terrarium mini). Web ini dibangun menggunakan **HTML5 semantik** dan **CSS3 murni** tanpa JavaScript atau framework eksternal, berfokus pada desain antarmuka *smart environment* modern dengan estetika *biophilic industrial*.

---

## 📌 Gambaran Umum Proyek

Web ini dirancang untuk menjawab kebutuhan pemelihara mikro-ekosistem presisi (reptil mini, katak dart, tanaman karnivora, serta koloni serangga bioaktif). Dashboard dan panel kontrol menyediakan representasi data sensorik, manajemen perangkat keras habitat, katalog keanekaragaman hayati, dan jadwal pemeliharaan rutin.

---

## 🧭 Struktur 5 Menu Utama

Proyek ini memiliki 5 halaman terpisah dengan tata letak konsisten dan status navigasi aktif:

| Menu | File | Deskripsi Fungsional |
| :--- | :--- | :--- |
| **1. Dashboard** | `index.html` / `dashboard.html` | Ringkasan telemetri sistem secara langsung: metrik suhu (°C), kelembapan relatif (%), siklus lampu UV (Day/Night cycle bar), status sistem pengabutan (*automated misting*), serta peringatan anomali. |
| **2. Enclosure Units** | `units.html` | Manajemen unit terrarium individual (Tank 01 - Amazonian Understory, Tank 02 - Montane Cloud Forest, dsb.) lengkap dengan kartu status lingkungan dan kesehatan substrat. |
| **3. Flora & Fauna Registry** | `registry.html` | Database spesimen hayati: taksonomi, kebutuhan mikroklimat ideal (rentang pH, lux pencahayaan, kelembapan), dan status populasi agen bioaktif (*springtail* & *isopoda*). |
| **4. Maintenance Schedule** | `maintenance.html` | Kalender agenda pemeliharaan: jadwal pemangkasan lumut (*pruning*), penggantian filter air terjun mini, kalibrasi sensor probe, dan penambahan suplemen nutrisi tanah. |
| **5. Diagnostics & Logs** | `diagnostics.html` | Catatan log histori anomali parameter habitat, laporan *health check* perangkat aktuator, dan formulir pengajuan inspeksi manual. |

---

## ✨ Fitur & Keunggulan CSS Modern

Meskipun murni berbasis HTML & CSS, proyek ini menerapkan teknik UI/UX modern:

- **100% Native CSS (No JS / No Framework):** Menggunakan semantic markup dan fitur CSS tingkat lanjut.
- **Biophilic Dark-Mode Theme:** Palet warna *earth-tone* modern (Forest Green, Moss, Warm Amber, Slate Gray).
- **CSS Grid & Flexbox:** Penataan layout dashboard multi-kolom yang presisi dan responsif.
- **CSS-Only Metrics & Progress:** Batang pengukur kelembapan dan suhu menggunakan kombinasi pseudo-elements (`::before`/`::after`) dan CSS variable percentages.
- **Status Blink Indicators:** Animasi `@keyframes` untuk lampu indikator sensor aktif/siaga.
- **Custom Interactive Elements:** Styling custom untuk slider, checkbox, scrollbar, serta micro-interactions via `:hover`, `:focus-visible`, dan `:active`.
- **Responsive Web Design:** Tampilan adaptif untuk resolusi desktop, tablet, dan smartphone dengan Media Queries.

---

## 📂 Struktur Direktori Proyek

```text
terratech-hub/
├── assets/
│   ├── css/
│   │   ├── style.css          # Berkas CSS utama (variabel, global, layout, komponen)
│   │   └── reset.css          # (Opsional) CSS Reset/Normalize
│   └── images/
│       ├── enclosures/        # Foto/ilustrasi unit terrarium
│       ├── flora-fauna/       # Foto/ilustrasi spesimen
│       └── icons/             # File SVG icon sistem
├── index.html                 # Halaman utama (Dashboard)
├── units.html                 # Halaman Enclosure Units
├── registry.html              # Halaman Flora & Fauna Registry
├── maintenance.html           # Halaman Maintenance Schedule
├── diagnostics.html           # Halaman Diagnostics & Logs
└── README.md                  # Dokumentasi proyek
```

---

## 🚀 Panduan Membuka & Menjalankan

Karena proyek ini hanya menggunakan HTML dan CSS statis, tidak diperlukan runtime server atau instalasi dependensi (seperti Node.js atau Apache).

1. **Clone atau Unduh Berkas:**
   ```bash
   git clone https://github.com/username/terratech-hub.git
   cd terratech-hub
   ```
2. **Jalankan:**
   - Cukup klik dua kali (double click) pada file `index.html`, atau
   - Buka menggunakan ekstensi **Live Server** di VS Code untuk preview langsung saat mengedit kode.

---

## 🎨 Palet Warna & Desain Token

```css
:root {
  /* Brand & Biophilic Palette */
  --bg-primary: #0f1412;        /* Deep Forest Charcoal */
  --bg-surface: #18221e;        /* Substrate Dark Green */
  --bg-surface-elevated: #22302a;
  
  --accent-leaf: #34d399;       /* Vibrant Sprout Emerald */
  --accent-amber: #f59e0b;      /* Basking Heat Warning */
  --accent-cyan: #38bdf8;       /* High Moisture & Misting */
  
  --text-main: #f0fdf4;         /* Crisp Light */
  --text-muted: #869990;        /* Soft Sage Gray */
  --border-subtle: #2d3f37;
}
```

---

## 📝 Catatan Tugas

- **Tujuan Penilaian:** Memenuhi tugas mata kuliah/pemrograman web dengan spesifikasi HTML & CSS murni.
- **Fokus Evaluasi:** Kerapian struktur semantik HTML, konsistensi arsitektur CSS, keunikan ide, dan responsivitas UI.

---

*Dikembangkan untuk Tugas Pemrograman Web.*
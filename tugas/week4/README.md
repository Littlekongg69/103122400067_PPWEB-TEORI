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
- **CSS-Only Metrics & Progress:** Batang pengukur kelembapan dan suhu menggunakan kombinasi pseudo-elements (`::before`/`::after`) dan CSS variable percentages (`--progress`, `--score`).
- **Pure CSS Filter Tabs:** Penyaringan kategori Flora, Fauna, dan Clean-Up Crew berbasis radio button state (`:checked`).
- **Interactive Checklists & Strikethrough:** Daftar tugas pemeliharaan interaktif murni CSS dengan efek coretan teks saat dicentang.
- **Custom Form Controls & Range Sliders:** Tampilan kustom modern untuk input datetime, range bar, select dropdown, dan dropzone upload berkas.
- **Status Blink Indicators:** Animasi `@keyframes` untuk lampu indikator sensor aktif/siaga dan efek pergeseran cahaya shimmer.
- **Responsive Web Design:** Tampilan adaptif untuk resolusi desktop, tablet, dan smartphone dengan Media Queries dan toggle menu navigasi mobile tanpa JavaScript.

---

## 📂 Struktur Direktori Proyek

```text
terratech-hub/
├── assets/
│   ├── css/
│   │   ├── style.css          # Berkas CSS utama (variabel, global, layout, komponen)
│   │   └── reset.css          # CSS Reset & Normalize
│   └── images/
│       ├── enclosures/        # Foto unit terrarium (Tank 01 - Tank 04)
│       ├── flora-fauna/       # Foto spesimen (Amfibi, Tokek, Flora, Isopoda)
│       └── icons/             # File SVG icon sistem
├── index.html                 # Halaman utama (Dashboard)
├── dashboard.html             # Alias Dashboard
├── units.html                 # Halaman Enclosure Units
├── registry.html              # Halaman Flora & Fauna Registry
├── maintenance.html           # Halaman Maintenance Schedule
├── diagnostics.html           # Halaman Diagnostics & Logs
└── README.md                  # Dokumentasi proyek
```

---

## 🚀 Panduan Membuka & Menjalankan

Karena proyek ini hanya menggunakan HTML dan CSS statis, tidak diperlukan runtime server atau instalasi dependensi (seperti Node.js atau Apache).

1. **Jalankan Langsung:**
   - Cukup klik dua kali (*double click*) pada berkas `index.html`, atau
   - Buka menggunakan ekstensi **Live Server** di VS Code.
2. **Navigasi Antar Halaman:**
   - Gunakan sidebar menu navigasi di sebelah kiri untuk berpindah antara 5 halaman:
     - 📊 Dashboard (`index.html`)
     - 🌿 Enclosure Units (`units.html`)
     - 🍄 Flora & Fauna (`registry.html`)
     - 🛠️ Maintenance (`maintenance.html`)
     - 📡 Diagnostics & Logs (`diagnostics.html`)

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

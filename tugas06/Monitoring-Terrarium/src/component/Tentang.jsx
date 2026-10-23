function Tentang() {
  return (
    <section className="tentang">
      <h2>Tentang Aplikasi</h2>
      <p>
        Monitoring Terrarium membantu memantau suhu dan kelembapan setiap
        terrarium agar tetap berada dalam rentang ideal bagi penghuninya.
      </p>
      <p>
        Terrarium dianggap <strong>Normal</strong> jika suhu dan kelembapannya
        sama-sama berada dalam rentang ideal. Jika salah satunya keluar dari
        rentang, statusnya menjadi <strong>Perlu Perhatian</strong>.
      </p>
      <p>
        Data saat ini disimpan di state React. Pada tahap berikutnya, frontend
        ini akan disambungkan ke backend/API.
      </p>
    </section>
  )
}

export default Tentang

function Navbar({ daftarMenu, menuAktif, onPilih }) {
  return (
    <nav className="navbar">
      {daftarMenu.map((menu) => (
        <button
          key={menu.id}
          type="button"
          className={menu.id === menuAktif ? 'menu aktif' : 'menu'}
          onClick={() => onPilih(menu.id)}
        >
          {menu.label}
        </button>
      ))}
    </nav>
  )
}

export default Navbar
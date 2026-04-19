import { useState, useEffect } from "react"

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current < 10) {
        setShow(true); // selalu muncul di paling atas
      } else if (current < lastScroll) {
        setShow(true); // scroll ke atas → muncul
      } else {
        setShow(false); // scroll ke bawah → sembunyi
      }
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
  <div className={`py-5 flex items-center justify-between fixed top-0 left-0 right-0 z-50 px-6 
      transition-transform duration-300
      ${show ? "translate-y-0" : "-translate-y-full"}`}>
    <div className="logo">
      <h1 className="text-3xl font-bold text-white">Portofolio</h1>
    </div>
    <ul className="menu flex items-center gap-6 md:gap-10 bg-zinc-900/80 backdrop-blur-md px-6 py-3 rounded-2xl">
      <li><a href="Home" className="sm:text-lg text-base font-medium text-white hover:text-violet-400 transition-colors">Beranda</a></li>
      <li><a href="#tentang" className="sm:text-lg text-base font-medium text-white hover:text-violet-400 transition-colors">Tentang</a></li>
      <li><a href="#proyek" className="sm:text-lg text-base font-medium text-white hover:text-violet-400 transition-colors">Proyek</a></li>
      <li><a href="#Kontak" className="sm:text-lg text-base font-medium text-white hover:text-violet-400 transition-colors">Kontak</a></li>
    </ul>
  </div>
  )
}

export default Navbar 
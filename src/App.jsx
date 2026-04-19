import DataImage from "./data";
import { useState, useEffect } from 'react';
import { listTools, listProyek } from "./data";
import Aurora from "./components/Aurora";
import Footer from './components/Footer';



function useTyping(texts, speed = 80, pause = 1500) {
  const [displayed, setDisplayed] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(i => i + 1), speed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(i => i - 1), speed / 2);
    } else {
      setDeleting(false);
      setTextIndex(i => (i + 1) % texts.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts, speed, pause]);

  return displayed;
}


function App() {
  const typedText = useTyping([
    'Data Enthusiast',
    'Machine Learning Learner', 
    'Mahasiswa Sistem Informasi',
  ]);
  return (
    <>
          {/* Aurora Background */}
    <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
        <Aurora
          colorStops={["#79dc68", "#fefefe", "#1e0096"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
    </div>
    <div className="hero min-h-screen flex flex-col items-center justify-center text-center px-4 " id="Home">
      <div className="animate__animated animate__fadeInUp">

        <h1 className="text-5xl/tight font-bold mb-4">Muhammad Rafa Kurnia</h1>
        <h2 className="text-2xl text-violet-400 font-semibold mb-6 h-8">
          {typedText}<span className="animate-pulse">|</span>
        </h2>
        <p className="text-base/loose mb-6 opacity-50 max-w-xl mx-auto">
          Saya seorang mahasiswa Sistem Informasi yang memiliki ketertarikan dalam bidang Data dan Machine Learning,
          terutama pada pengolahan maupun pemrosesan data hingga mendapatkan sebuah insight menarik.
        </p>
        <div className="flex items-center justify-center sm:gap-4 gap-2">
          <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV</a>
          <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Proyek</a>
        </div>
      </div>
    </div>

    {/*Tentang*/}
    <div className="tentang mt-32 py-10" id="tentang">
       <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000"> 
        <p className="text-base/loose mb-10">Hi, Perkenalkan Muhammad Rafa Kurnia, mahasiswa Sistem Informasi di Universitas Negeri Semarang yang memiliki minat kuat dalam
          data, machine learning, dan analisis data untuk menghasilkan insight bisnis yang bermakna.
          Selama perjalanan belajar saya, saya aktif mengeksplorasi berbagai proyek data analysis menggunakan Python dan berbagai teknik pengolahan data untuk memecahkan
          persoalan nyata dan mengembangkan kemampuan
          teknis saya. Saya percaya proses belajar yang konsisten sedikit demi sedikit setiap hari  akan membawa dampak besar dalam kualitas karya saya sebagai profesional data di masa depan</p>
        <div className="flex items-center justify-between">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">2<span className="text-violet-500">+</span></h1>
              <p>Proyek Selesai</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1"> 1 <span className="text-violet-500">+</span></h1>
              <p>Tahun Pengalaman</p>
            </div>
          </div>
        </div>
        </div>
    </div>

    {/* Tools */}
    <div className="tools mt-32">
      <h1 className="text-4xl/snug font-bold mb-4">Tools yang dipakai</h1>
      <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">Berikut beberapa tools yang saya pakai untuk pengolahan data serta 
        selama saya belajar didunia data
      </p>
      <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"data-aos="fade-up" data-aos-duration="1000">

        {listTools.map(tool => (
        <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id}>
          <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
        <div>
          <h4 className="font-bold">{tool.nama}</h4>
          <p className="opacity-50">{tool.ket}</p>
        </div>
        </div>
        ))}

      </div>
    </div>
  {/* proyek */}
  <div className="proyek mt-32 py-10 " id="proyek">
    <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
    <p className="text-base/loose text-center opacity-50">Berikut ini proyek yang telah saya buat.</p>
    <div className="proyex-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 items-start" data-aos="fade-up" data-aos-duration="1000">
      {listProyek.map(proyek => (
        <div className="p-4 bg-zinc-800 rounded-md flex flex-col" key={proyek.id}>
          <img src={proyek.gambar} alt="Proyek Image" loading="lazy" className="w-full object-cover rounded-md" />
          <div className="flex flex-col flex-1 mt-4">
            <h1 className="text-2xl font-bold mb-2">{proyek.nama}</h1>
            <p className="text-base/loose mb-4 opacity-80">{proyek.desk}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {proyek.tools.map((tool, index) => (
                <p className="py-1 px-3 border border-zinc-500 rounded-md font-semibold bg-zinc-600" key={index}>{tool}</p>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a href={proyek.link} className="bg-violet-600 p-3 rounded-lg block hover:bg-violet-500 transition-colors">Lihat Proyek</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>





  <Footer/>
    </>
  )
}

export default App

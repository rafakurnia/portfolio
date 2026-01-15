import DataImage from "./data";
import {listTools,listProyek} from "./data"

function App() {

  return (
    <>
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div className="animate__animated animate__fadeInUp">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="Hero Image"className="w-10 rounded-md" loading="lazy" />
          <q>Tetap berproses meskipun satu persen sehari.</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Muhammad Rafa Kurnia</h1>
        <p className= "text-base/loose mb-6 opacity-50">Saya seorang mahasiswa Sistem Informasi yang memiliki ketertarikan dalam bidang Data dan Machine Learning,
          terutama pada pengolahan maupun pemrosesan data hingga mendapatkan sebuah insight menarik.
        </p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV</a>
          <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Proyek</a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image"className="w-[500pc] md:ml-auto  animate__animated animate__fadeInUp"loading="lazy" />
    </div>

    {/*Tentang*/}
    <div className="tentang mt-32 py-10">
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
    <div className="proyek mt-32 py-10">
      <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
      <p className="text-base/loose text-center opacity-50">Berikut ini proyek yang telah saya b uat.</p>
      <div className="proyex-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4"data-aos="fade-up" data-aos-duration="1000">
        {listProyek.map(proyek => (
          <div className="p-4 bg-zinc-800 rounded-md" key={proyek.id}>
            <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
            <div>
              <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
              <p className="text-base/loose mb-4">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <p className="py-1 px-3 border border-zinc-500 rounded-md font-semibold bg-zinc-600" key={index}>{tool}</p>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a href={proyek.link} className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 bg-violet-600 ">Lihat Proyek</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    </>
  )
}

export default App

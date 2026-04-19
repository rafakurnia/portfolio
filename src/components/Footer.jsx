import { useState } from 'react';

const Footer = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!email || !nama) return;
    setSent(true);
    setNama('');
    setEmail('');
    setPesan('');
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <footer className="mt-32 py-16 border-t border-zinc-700/50 bg-zinc-900 px-10" id="Kontak">
        <div className="flex flex-col md:flex-row gap-16 mb-10 items-center justify-center">

        {/* Kiri - Form */}
        <div className="flex-1 max-w-sm">
            <h2 className="text-2xl font-bold mb-3">Hubungi Saya</h2>
            <p className="opacity-40 text-sm mb-6">
            Email: <a href="mailto:rafakurnia2006@gmail.com" className="underline hover:opacity-70">rafakurnia2006@gmail.com</a>
            </p>

            <div className="flex flex-col gap-3">
            <input
                type="text"
                value={nama}
                onChange={e => setNama(e.target.value)}
                placeholder="Nama"
                className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-violet-500 transition-colors w-full"
            />
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-violet-500 transition-colors w-full"
            />
            <textarea
                value={pesan}
                onChange={e => setPesan(e.target.value)}
                placeholder="Pesan"
                rows={3}
                className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-violet-500 transition-colors w-full resize-none"
            />
            <button
                onClick={handleSubmit}
                className="bg-violet-700 hover:bg-violet-600 py-2.5 rounded-lg text-sm font-semibold transition-colors w-full">
                {sent ? '✓ Terkirim!' : 'Kirim Pesan'}
            </button>
            
            </div>
            
        </div>
                    {/* Kanan - Sosmed pojok kanan bawah */}
                    <div className="fixed bottom-6 right-6 flex flex-col items-end justify-end gap-4">
                    <div className="flex items-center gap-5">
                        <a href="https://github.com/rafakurnia" target="_blank" rel="noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">
                        <img src="/github.png" alt="GitHub" className="w-8 h-8" />
                        </a>
                        <a href="https://www.linkedin.com/in/rafakrn" target="_blank" rel="noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.059-1.864-3.059-1.865 0-2.150 1.457-2.150 2.963v5.700h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.002 3.604 4.604v5.592z"/>
                        </svg>
                        </a>
                        <a href="https://instagram.com/rafakurnia._" target="_blank" rel="noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.851s-.012 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.069-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163c-3.259 0-3.667.014-4.947.072-1.609.074-3.057.38-4.204 1.527C1.702 2.796 1.396 4.244 1.322 5.853 1.264 7.133 1.25 7.541 1.25 12c0 4.459.014 4.867.072 6.147.074 1.609.38 3.057 1.527 4.204 1.147 1.147 2.595 1.453 4.204 1.527C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.609-.074 3.057-.38 4.204-1.527 1.147-1.147 1.453-2.595 1.527-4.204.058-1.28.072-1.688.072-6.147 0-4.459-.014-4.867-.072-6.147-.074-1.609-.38-3.057-1.527-4.204C19.957.38 18.509.074 16.9 0 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                        </svg>
                        </a>
                    </div>
                    </div>
        </div>
        <div className="w-full flex justify-center items-center mt-10">
  <p className="text-center text-sm md:text-base text-gray-400 italic max-w-md">
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela"
  </p>
</div>
    </footer>
  );
};

export default Footer;  
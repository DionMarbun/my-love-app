import { useState, useEffect } from 'react';
import TenorEmbed from './TenorEmbed';
import './App.css';

function App() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');

  // Audio state
  const [audio] = useState(new Audio('/wanna_be_yours.mp3'));
  const [audioPlaying, setAudioPlaying] = useState(false);

  const handleNext = () => setStep(step + 1);

  const handleSaveName = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      setStep(step + 1);
    } else {
      alert('Isi dulu nama kamu ya!❤️');
    }
  };

  const handleSayang = () => setStep(99);
  const handleEngga = () => setStep(404);
  const handleFinish = () => setStep(100);

  const handlePlayMusic = () => {
    audio.loop = true;
    audio.play();
    setAudioPlaying(true);
  };

  // Autoplay di laptop (non mobile)
  useEffect(() => {
    audio.loop = true;
    audio.play().then(() => {
      setAudioPlaying(true);
    }).catch(() => {
      
    });
  }, [audio]);

  return (
    <div className="container">

      {/* Content */}
      <div className="box">
        {step === 0 && (
          <>
            <TenorEmbed postId="27137384" />
            <h2>Hai kamu! ❤️ lagi sibuk ga?</h2>
            <button className="btn" onClick={handleNext}>Lanjut</button>
            {!audioPlaying && (
              <button className="btn" onClick={handlePlayMusic}>🎵 Nyalakan Musik </button>
            )}
          </>
        )}

        {step === 1 && (
          <>
            <TenorEmbed postId="10778878611965063710" />
            <h2>Aku Mau Nanya nih 😁</h2>
            <p>(Jawab dengan jujur ya)</p>
            <button className="btn" onClick={handleNext}>Lanjut</button>
          </>
        )}

        {step === 2 && (
          <>
            <TenorEmbed postId="15358902588064505364" />
            <h2>Isi Nama Kamu 😄</h2>
            <form onSubmit={handleSaveName}>
              <input
                type="text"
                className="input-name"
                placeholder="Masukkan nama..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              /><br />
              <button className="btn" type="submit">Jawab</button>
            </form>
          </>
        )}

        {step === 3 && (
          <>
            <TenorEmbed postId="6570595561982414858" />
            <h2>{name}, sayang nggak sama aku? 🥺</h2>
            <button className="btn" onClick={handleSayang}>Sayang</button>
            <button className="btn btn-red" onClick={handleEngga}>Engga</button>
          </>
        )}

        {step === 99 && (
          <>
            <TenorEmbed postId="11175741054448487684" />
            <h2>Yeay! Aku juga sayang sama {name} 😍</h2>
            <button className="btn" onClick={handleFinish}>🎁</button>
          </>
        )}

        {step === 404 && (
          <>
            <TenorEmbed postId="26864871" />
            <h2>Oke deh sampai sini aja 😭</h2>
            <button className="btn" onClick={() => window.location.reload()}>Ulangi</button>
          </>
        )}

        {step === 100 && (
          <>
            <TenorEmbed postId="27305768" />
            <h2>Makasih ya {name} 😍❤️</h2>
            <p>Kirim jawabannya ke aku ya &gt;&lt;</p>
            <button className="btn" onClick={() => window.location.reload()}>Main Lagi</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

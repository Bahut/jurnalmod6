import { useState } from "react";
import KartuMenu from "./components/kartuMenu";
import Panel from "./components/panel";
function App(){
  const N = 89;
  const jam = 9;
  const [judul, setJudul] = useState ("Kantin Farel kun");

  const style = {
    color :"pink",
    fontSize : "30px",
    fontWeight : "bold"
  }

  return (
    <>
    <p style= {style}> {judul}</p>
    <p>{jam <12 ? "Selamat pagi" : "Selamat siang "}</p>
    <p>Saldo awal kartu kantin: Rp.{N*1000}</p>
    <button disabled="disabled">Bayar</button>
    <Panel judul="Menu Hari Ini">
      <KartuMenu nama="Nasi Ayam Geprek" harga={19100} />
      <KartuMenu nama="Es Teh Lemon" harga={5000} kategori="Minuman" />
      <KartuMenu nama="Mie Goreng Telur" harga={15000} kategori="Makanan" />
    </Panel>
    </>
  )
}

export default App









  
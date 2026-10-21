import { useState } from "react";

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
    </>
  )
}

export default App
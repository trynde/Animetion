import CardFilme from "@/components/CardFilme";
import Header from "@/components/Header";
import SecaoFilmes from "@/components/SecaoFilmes";
import Titulo from "@/components/Titulo";
import { useState } from "react";

export default function Home() {
    const [filmes, setFilmes] = useState([])
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTQzOWVkZTAxZDM1MmFlNzkyZmI0MDc3ZjQ3MWFlYiIsInN1YiI6IjY0NzdjYjYyMDc2Y2U4MDE0OWVkOTExNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E5bjTobF1XR4QodyrBKzvE2gzVO5R5MnPgusn1KSozE'
      }
    };
    
    fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=16', options)
      .then(response => response.json())
      .then(response => setFilmes(response.results))
      .catch(err => console.error(err));
//   const filmes = [
//   {
//     titulo: "My Hero Academia",
//     nota: "8.9",
//     poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xoM2Ds3RDIKC3QuN1KNWmwv5J22.jpg"
//   },
//   {
//     titulo: "shingeki no kyojin",
//     nota: "6.7",
//     poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hNEG0e6aPq0EwrugX5A5rCc9TGg.jpg"
//   }
// ]
  return (
    <>    
      <Header />

      <div>
        <img className="h-72 object-cover w-screen brightness-50" src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg">
        </img>
      </div>
      <main className="flex min-h-screen flex-col justify-between px-24">
        <Titulo>Filmes em Altas</Titulo>

        <SecaoFilmes filmes={filmes} />

        <Titulo>Melhores Dramas</Titulo>
        <Titulo>Séries em Altas</Titulo>
        <Titulo>Lançamentos</Titulo>


      </main> //JSX
    </>//JSX
  )
}
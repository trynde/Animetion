import CardFilme from "@/components/CardFilme";
import SecaoFilmes from "@/components/SecaoFilmes";
import Titulo from "@/components/Titulo";

export default function Home() {
  const filmes = [
  {
    titulo: "Super Mario",
    nota: "8.9",
    poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/kzYbNJ4JaQiRny0cDi8a6bNX5w3.jpg"
  },
  {
    titulo: "A Mãe",
    nota: "6.7",
    poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/5OeWHBMifiRPMz6eS23miS5ttED.jpg"
  }
]
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <Titulo>Filmes em Altas</Titulo>

      <SecaoFilmes filmes={filmes} />
      




      <Titulo>Melhores Dramas</Titulo>
      <Titulo>Séries em Altas</Titulo>
      <Titulo>Lançamentos</Titulo>


    </main>//JSX
  )
}

export default function CardFilme({filme}) {
    return (
        <div className=" flex flex-col p-2 w-56">
            <img className="rounded-lg" src={filme.poster} />
            <h4 className="text-x1 my-2 line-clamp-1 w-fit">{filme.titulo}</h4>
            <div className="text-center">
            ⭐
                <span className="text-lg">{filme.nota}</span>
            </div>
            <a href="#" className="rounded-lg bg-cyan-700 pay-2 text-center">detalhes</a>
        </div>
    )
}
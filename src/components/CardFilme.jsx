import StarIcon from '@mui/icons-material/Star'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useState } from 'react'


export default function CardFilme({filme}) {
    const[favorito, setFavorito] = useState(false)
    const poster = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/" + filme.poster_path


    return (
        <div className=" flex flex-col p-2 w-56">
            <div className='relative'>
                {
                    favorito ? 
                    <FavoriteIcon className='absolute right-2 top-2 cursor-pointer' 
                    onClick={ () => setFavorito(false) }/>:
                    <FavoriteBorderIcon className='absolute right-2 top-2 cursor-pointer' 
                    onClick={ () => setFavorito(true) }/>

                }
                <img className="rounded-lg" src={poster} />

            </div>
            <h4 className="text-x1 my-2 line-clamp-1 w-fit">{filme.name}</h4>
            <div className="flex justify">
                <StarIcon className='text-amber-400'/>
                <span className="text-lg">{filme.vote_average}</span>
            </div>
            <a href="#" className="rounded-lg bg-cyan-700 pay-2 text-center">detalhes</a>
        </div>
    )
}
import SlideshowIcon from '@mui/icons-material/Slideshow'
import Link from 'next/link'

export default function Header() {
    return(
      <header ClassName="flex justify-between w-100 bg-slate-800">
          <Link href='/'  className="flex m-4 text-amber-400">
          <SlideshowIcon className="text 4x1"/>
          <h1 className="text 4x1">Senac Filmes</h1>
          </Link>

          <Link className="m-4" href="/sobre">sobre</Link>
      </header>
    )
}
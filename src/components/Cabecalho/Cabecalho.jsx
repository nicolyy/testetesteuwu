import Link from 'next/link'

export default function Cabecalho() {
  return (
    <header className='cabecalho'>
      <nav>
        <ul>
          <li><Link href="/">HOME</Link></li>
        </ul>
      </nav>
    </header>
    
  )
}
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { LongText } from './cmps/LongText.jsx'

const { useState } = React

export function App() {
    const [page, setPage] = useState('books')
    const randomTxt = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum corrupti quaerat placeat accusantium hic facere, sint voluptatum eos adipisci ex explicabo, cum recusandae numquam tempore modi laboriosam dignissimos illo exercitationem.'

    return (
        <section className="app main-layout">
            <header className="app-header full main-layout">
                <section>
                    <h1>React Book App</h1>
                    <nav className="app-nav">
                        <a onClick={() => setPage('home')} href="#">Home</a>
                        <a onClick={() => setPage('about')} href="#">About</a>
                        <a onClick={() => setPage('books')} href="#">books</a>
                    </nav>
                </section>
            </header>

            <main>
                {page === 'home' && <Home />}
                {page === 'about' && <About />}
                {page === 'books' && <BookIndex />}
                <LongText txt={randomTxt} length={20} />
            </main>
        </section>
    )
} 
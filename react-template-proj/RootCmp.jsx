import { Home } from './cmps/BookIndex.jsx'

const { useState } = React

export function App() {
    const [page, setPage] = useState('books')

    return (
        <section className="app main-layout">
            <header className="app-header full main-layout">
                <section>
                    <h1>React Car App</h1>
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
            </main>
        </section>
    )
} 
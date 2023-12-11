const Router = ReactRouterDOM.HashRouter
const { Routes, Route, NavLink } = ReactRouterDOM


import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { BookDetails } from './pages/BookDetails.jsx'
import { BookEdit } from './pages/BookEdit.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { AddReview } from './pages/AddReview.jsx'


export function App() {

    return (
        <Router>
            <section className="app main-layout">
                <AppHeader />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/book" element={<BookIndex />} />
                        <Route path="/book/:bookId" element={<BookDetails />} />
                        <Route path="/book/review/:bookId" element={<AddReview />} />
                        <Route path="/book/edit/:bookId" element={<BookEdit />} />
                    </Routes>
                </main>
                <UserMsg />
            </section>
        </Router>
    )
} 
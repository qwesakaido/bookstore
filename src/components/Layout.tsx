import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'

export function Layout() {
    return (
        <div>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </div>
    )
}

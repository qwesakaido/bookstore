import { useState } from 'react'
// import { useDispatch } from 'react-redux'
import styles from '../styles/login.module.css'
// import { login } from '../redux/authSlice' // Предполагаем, что у вас есть такой экшен

export function LoginPage() {
    // const dispatch = useDispatch()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // const fakeToken = 'some-fake-token'

        // dispatch(login({ user: { email }, token: fakeToken }))
    }

    return (
        <div className={styles.loginPage}>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <h2>Вход</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Войти</button>
            </form>
        </div>
    )
}

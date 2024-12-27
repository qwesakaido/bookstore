import styles from '../styles/main.module.css'
import { IMainProps } from '../types/types'

export function Main({ children }: IMainProps) {
    return <div className={styles.mainContainer}>{children}</div>
}

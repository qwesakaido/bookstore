import styles from '../styles/footer.module.css'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <span>©2024 Bookstore</span>
                <span>All rights reserved</span>
            </div>
        </footer>
    )
}

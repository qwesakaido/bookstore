import { IBookDetails } from '../types/types'
import styles from '../styles/bookpage.module.css'

export interface IBookDetailsProps {
    bookDetails: IBookDetails
}

export const BookDetails: React.FC<IBookDetailsProps> = ({ bookDetails }) => {
    return (
        <div className={styles.bookContent}>
            <img
                className={styles.bookImage}
                src={bookDetails.image}
                alt={bookDetails.title}
            />
            <div className={styles.bookInfo}>
                <p><strong>Автор:</strong> {bookDetails.authors}</p>
                <p><strong>Цена:</strong> {bookDetails.price}</p>
                <p><strong>Язык:</strong> {bookDetails.language}</p>
                <p className={styles.bookDesc}>{bookDetails.desc}</p>
            </div>
        </div>
    )
}

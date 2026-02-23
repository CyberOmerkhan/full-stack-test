import styles from './page.module.css'
import Link from 'next/link'

export default function Button({url, children}) {
    return (
        <Link href = {url}>
            <button className = {styles.container}>
                {children}
            </button>
        </Link>
    ) 
}
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'

export default async function Category({params} : {params: Promise<{category: string}>}){
    const props = await params
    return (
        <div className={styles.container}>
            <h1 className={styles.carTitle}>
                {props.category} 
            </h1>
            <div className = {styles.item}>
                <div className = {styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className = {styles.desc}>Description</p>
                    <Button url = "#">See More</Button>
                </div>
                <div className = {styles.imgContainer}>
                    <Image 
                        className = {styles.img}
                        fill={true} 
                        src = "https://images.pexels.com/photos/33473224/pexels-photo-33473224.jpeg" 
                        alt = "Not found"/> 
                </div>
            </div>
            <div className = {styles.item}>
                <div className = {styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className = {styles.desc}>Description</p>
                    <Button url = "#">See More</Button>
                </div>
                <div className = {styles.imgContainer}>
                    <Image 
                        className = {styles.img}
                        fill={true} 
                        src = "https://images.pexels.com/photos/33473224/pexels-photo-33473224.jpeg" 
                        alt = "Not found"/> 
                </div>
            </div>
        </div>
    )
}
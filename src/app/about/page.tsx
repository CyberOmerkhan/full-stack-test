import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

export default function About() {
    return (
        <div className = {styles.container}>
            <div className = {styles.imgContainer}>
                <Image src = "https://images.pexels.com/photos/35846889/pexels-photo-35846889.jpeg" fill = {true} alt= ""
                className={styles.img}/>
                <div className = {styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imgDescription}>Handcrafting award-winning digital experiences</h2>
                </div>
            </div>
            <div className = {styles.textContainer}>
                <div className={styles.item}>
                    <h1 className = {styles.title}>Who are we?</h1>
                    <p className = {styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className = {styles.title}>Who are we?</h1>
                    <p className = {styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    </p>
                    <Button url = "/contact">Contact Us</Button>
                </div>
            </div>
        </div>
    )
}
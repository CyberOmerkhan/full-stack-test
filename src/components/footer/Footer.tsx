"use client"

import Image from 'next/image'
import style from './Footer.module.css'

export default function Footer() {
    console.log('this is footer hello')
    return (
        <div className={style.container}>
            <div>(C) Amirkhan Aidarkhan 2026. All rights definitely not reserved.</div>
            <div>
                <div className={style.social}>
                    <Image src="/1.png" alt = "Llama" width = {15} height = {15} className = {style.icon}/>
                    <Image src="/2.png" alt = "Llama" width = {15} height = {15} className = {style.icon}/>
                    <Image src="/3.png" alt = "Llama" width = {15} height = {15} className = {style.icon}/>
                    <Image src="/4.png" alt = "Llama" width = {15} height = {15} className = {style.icon}/>
                </div>
                
            </div>
        </div>
    )
}
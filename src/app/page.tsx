import Image from "next/image";
import styles from "./page.module.css";
import heroImage from '../../public/hero.png'

export default function Home() {
  return (
    <div>
      <Image width = {150} height = {200} src = "https://content.pexels.com/images/canva/canva-branded-ads/en-US/affinity-for-free_1024w.png" alt = "" className = {styles.img}/>
    </div>
  );
}

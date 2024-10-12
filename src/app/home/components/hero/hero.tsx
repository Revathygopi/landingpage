
import styles from './hero.module.css';
import Image from 'next/image';
import banner from '../images/banner1.png'
export default function Hero() {
    return (
       <div className={styles.container}>
         <div className={styles.text}>
            <div className={styles.content1}>
                Empowering Supply Chain and Value Chain Excellence
            </div>
            <div className={styles.content2}>
                As a digital platform, Solwer delivers comprehensive solutions to strengthen supply chains and value chains.
                 Our innovation fosters smarter manufacturing, sustainable mobility, and transparency for enhanced customer trust.
            </div>
        </div>
         <div className={styles.logo}>
         <Image
             src={banner}
             alt="logo"
             width={639}
             height={460}
         />
     </div>
       </div>
    )
}
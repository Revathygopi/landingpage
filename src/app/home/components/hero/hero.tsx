
import styles from './hero.module.css';
import Image from 'next/image';
import banner from '../images/banner1.png'
export default function Hero() {
    return (
           <div className= {styles.cont}>
            <div className={` d-flex  ${styles.container}`}>
             <div className={`d-flex flex-column ${styles.content}`}>
                <p className={styles.empowering}>
                    Empowering Supply Chain and Value Chain Excellence
                </p>
                <p className={styles.digitalplatform}>
                    As a digital platform, Solwer delivers comprehensive solutions to strengthen supply chains and value chains.
                     Our innovation fosters smarter manufacturing, sustainable mobility, and transparency for enhanced customer trust.
                </p>
            </div>
             <div className={styles.logo}>
             <Image
                 src={banner}
                 alt="banner"
                 className={`img-fluid`}
                 width={639}
                 height={460}
             />
         </div>
           </div>
           </div>
      
    
    


    )
}
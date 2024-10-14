import styles from './supplychain.module.css'
import Image from 'next/image'
import banner from '../images/Screenshot 2024-09-01 at 9.54.34 PM 1 (1).png'
import oval from '../images/Oval.png'
import palyfill from '../images/play-fill.png'

export default function Supplychain() {
    return (
        <div className={`d-flex align-items-center justify-content-center pt-5 ${styles.container}`}>
            <div className={styles.imagecontainer}>
                <Image
                    src={banner}
                    alt="logo"
                    className={`img-fluid`}
                    width={1048}
                    height={586}
                />
                <p className={styles.content}>
                    Transforms supply chains and value chains
                </p>
                <div className={styles.oval}>
                    <Image
                        src={oval}
                        alt="logo"
                        className={`img-fluid`}
                        width={114}
                        height={114}
                    />
                </div>
                <div className={styles.playfill}>
                    <Image
                        src={palyfill}
                        alt="logo"
                        className={`img-fluid`}
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </div>
    )
}
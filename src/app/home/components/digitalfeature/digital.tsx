import styles from './digital.module.css';
import Image from 'next/image';
import digitalimage from '../images/digitalimage.png'

export default function Digital() {
    return (
        <div className={styles.container}>
            <div className={styles.digitalheading}>
                AI-Powered Vehicle Digital Inspection
            </div>
            <div className={styles.imagecontent}>
                <div className={styles.imagecontainer}>

                <Image
                            src={digitalimage}
                            alt="Digitalimage"
                            className={styles.digitalimage}
                            width={641}
                            height={334}
                        />
                </div>
            </div>
        </div>
    )
}
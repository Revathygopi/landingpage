
import styles from './mobility.module.css'
import Image from 'next/image'
import mobileimage1 from '../images/mobileimage1.png'
import mobileimage2 from '../images/mobileimage2.png';
import mobileimage3 from '../images/mobileimage3.png'

export default function Mobility() {
    return (
        <div className={`d-flex flex-column justify-content-center align-items-center ${styles.container}`}>
            <div className={styles.heading}>
                <div className={styles.content1}>
                    Seamless Access to the Mobility Aftermarket
                </div>
                <div className={`pt-3 ${styles.content2}`}>
                    Our super app connects customers with service providers, including repair shops, car dealers, and car washes,
                    offering transparent pricing and cross-selling opportunities.
                </div>
            </div>
            <div className={styles.marketbutton}>
                <p className={styles.buttontext}>Join Our Marketplace</p>
            </div>
            <div className={`row justify-content-center ${styles.imageconatiner}`}>
                <div className="col-4 d-flex flex-column align-items-center">
                    <div className={styles.imagecontainer1}>
                        <Image
                            src={mobileimage1}
                            alt="Mobileimage"
                            className={styles.image1}
                            width={282}
                            height={621}
                        />
                    </div>
                    <div className={styles.imagecontainer1text}>
                        <div className={styles.text1}>
                            <p>Vehicle Repair</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 d-flex flex-column align-items-center">
                    <div className={styles.imagecontainer2}>
                        <Image
                            src={mobileimage2}
                            alt="Mobileimage"
                            className={styles.image2}
                            width={282}
                            height={621}
                        />
                    </div>
                    <div className={styles.imagecontainer2text}>
                        <div className={styles.text2}>
                            <p>Vehicle Finance</p>
                        </div>
                    </div>
                </div>
                
                <div className="col-4 d-flex flex-column align-items-center">
                    <div className={styles.imagecontainer3}>
                        <Image
                            src={mobileimage3}
                            alt="Mobileimage"
                            className={styles.image3}
                            width={282}
                            height={621}
                        />
                    </div>
                    <div className={styles.imagecontainer3text}>
                        <div className={styles.text3}>
                            <p>Inventory Management</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

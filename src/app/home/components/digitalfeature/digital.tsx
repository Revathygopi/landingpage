import styles from './digital.module.css';
import Image from 'next/image';
import digitalimage from '../images/digitalimage.png'
import oval from '../images/Oval.png'
import playfill from '../images/play-fill.png';
import checkfill from '../images/check-fill.png'
import downloadicon from '../images/download-icon.png'

export default function Digital() {
    return (
        <div className={styles.container}>
            <div className={styles.digitalheading}>
                AI-Powered Vehicle Digital Inspection
            </div>
            <div className={`d-flex justify-content-between mt-5  ${styles.imagecontent}`}>
                <div className={styles.imagecontainer}>

                    <Image
                        src={digitalimage}
                        alt="Digitalimage"
                        className={styles.digitalimage}
                        width={641}
                        height={334}
                    />
                    <div className={styles.oval}>
                        <Image
                            src={oval}
                            alt="logo"
                            className={`img-fluid`}
                            width={120}
                            height={68}
                        />
                    </div>
                    <div className={styles.playfill}>
                        <Image
                            src={playfill}
                            alt="logo"
                            className={`img-fluid`}
                            width={30}
                            height={20}
                        />
                    </div>

                </div>
                <div className={`d-flex flex-column ${styles.contentwithbutton}`}>
                    <div className={`${styles.content}`}>
                        <div className={styles.content1}>
                            Our platform revolutionizes vehicle inspection by automating valuation processes with advanced image
                            recognition and machine learning
                        </div>
                        <div className={`mt-3 ${styles.pointcontent}`}>
                            <div className={`d-flex ${styles.line1content}`}>
                                <div className={styles.checkfill}>
                                    <Image
                                        src={checkfill}
                                        alt="checkfill"
                                        className={`img-fluid`}
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <p>Improved data management</p>
                            </div>

                            <div className={`d-flex ${styles.line2content}`}>
                                <div className={`d-flex ${styles.transparency}`}>
                                    <div className={styles.checkfill}>
                                        <Image
                                            src={checkfill}
                                            alt="checkfill"
                                            className={`img-fluid`}
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <p> Transparency</p>
                                </div>
                                <div className={`d-flex ${styles.reports}`}>
                                    <div className={styles.checkfill}>
                                        <Image
                                            src={checkfill}
                                            alt="checkfill"
                                            className={`img-fluid`}
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <p>Refined Reports</p>
                                </div>
                            </div>
                            <div className={`d-flex ${styles.line3content}`}>
                                <div className={styles.checkfill}>
                                    <Image
                                        src={checkfill}
                                        alt="checkfill"
                                        className={`img-fluid`}
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <p>Speed and Efficiency</p>
                            </div>
                        </div>
                    </div>
                    <div className={`d-flex  ${styles.downloadbutton}`}>
                    <div className={styles.downloadicon}>
                        <Image
                            src={downloadicon}
                            alt="download-icon"
                            className={`img-fluid`}
                            width={30}
                            height={20}
                        />
                    </div>
                    <p>
                    Download Product Brochure
                    </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
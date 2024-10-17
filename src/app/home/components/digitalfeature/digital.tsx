import styles from './digital.module.css';
import Image from 'next/image';
import digitalimage from '../images/digitalimage.png'
import oval from '../images/Oval.png'
import playfill from '../images/play-fill.png';
import checkfill from '../images/check-fill.png'
import downloadicon from '../images/download-icon.png'

export default function Digital() {
    return (
        <div className={`d-flex flex-column align-items-center ${styles.container}`}>
            <div className={styles.digitalheading}>
                AI-Powered Vehicle Digital Inspection
            </div>
            <div className={`d-flex justify-content-between justify-content-center align-items-center   ${styles.imagecontent}`}>
                <div className={`d-flex justify-content-center align-items-center ${styles.imagecontainer}`}>

                    <Image
                        src={digitalimage}
                        alt="Digitalimage"
                        className={`img-fluid ${styles.digitalimage}`}
                        width={641}
                        height={334}
                    />
                    <div className={styles.oval}>
                        <Image
                            src={oval}
                            alt="logo"
                            className={`img-fluid`}
                            width={68}
                            height={68}
                        />
                    </div>
                    <div className={styles.playfill}>
                        <Image
                            src={playfill}
                            alt="logo"
                            className={`img-fluid`}
                            width={20}
                            height={20}
                        />
                    </div>

                </div>
                <div className={`d-flex flex-column   justify-content-between  ${styles.contentwithbutton}`}>
                    <div className={` d-flex flex-column justify-content-center align-items-center ${styles.content}`}>
                        <div className={` ${styles.content1}`}>
                            Our platform revolutionizes vehicle inspection by automating valuation processes with advanced image
                            recognition and machine learning
                        </div>
                        <div className={`d-flex flex-column  ${styles.pointcontent}`}>
                            <div className={`d-flex ${styles.datamanagement}`}>
                               
                                    <Image
                                        src={checkfill}
                                        alt="checkfill"
                                        className={`img-fluid ${styles.checkfill}`}
                                        width={24}
                                        height={24}
                                    />

                                <p>Improved data management</p>
                            </div>

                            <div className={`d-flex  ${styles.transparencyreports}`}>
                                <div className={`d-flex ${styles.transparency}`}>
                                        <Image
                                            src={checkfill}
                                            alt="checkfill"
                                            className={`img-fluid ${styles.checkfill}`}
                                            width={24}
                                            height={24}
                                        />
                                    <p> Transparency</p>
                                </div>
                                <div className={`d-flex ${styles.reports}`}>
                                        <Image
                                            src={checkfill}
                                            alt="checkfill"
                                            className={`img-fluid ${styles.checkfill}`}
                                            width={24}
                                            height={24}
                                        />
                                    <p>Refined Reports</p>
                                </div>
                            </div>
                            <div className={`d-flex ${styles.efficiency}`}>
                                    <Image
                                        src={checkfill}
                                        alt="checkfill"
                                        className={`img-fluid ${styles.checkfill}`}
                                        width={24}
                                        height={24}
                                    />
                                <p>Speed and Efficiency</p>
                            </div>
                        </div>
                    </div>
                    <div className={`d-flex ${styles.downloadbutton}`}>
                            <Image
                                src={downloadicon}
                                alt="download-icon"
                                className={`img-fluid ${styles.downloadicon}`}
                                width={30}
                                height={20}
                            />

                        <p>
                            Download Product Brochure
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
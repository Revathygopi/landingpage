import styles from './feature.module.css';
import Image from 'next/image';
import feature from '../images/featureimage.png'
import roundimage from '../images/round.png'
export default function Feature() {
    return (
            <div className={`d-flex flex-column align-items-center ${styles.container}`}>
                <div className={`d-flex flex-column ${styles.header}`}>
                    <div className={styles.heading}>
                        Digital Solutions for Sustainable Growth
                    </div>
                    <div className={styles.text}>
                        Delivering digital solutions to optimize operations and reduce environmental impact
                    </div>
                </div>
                <div className={`d-flex  align-items-center ${styles.imagecontent}`}>
                    <div className={styles.image}>
                        <Image
                            src={feature}
                            alt="featureimage"
                            className={`img-fluid`}
                            width={486}
                            height={381}
                        />
                    </div>
                    <div className={`d-flex flex-column ${styles.content}`}>
                        <div className={`d-flex ${styles.content1}`}>
                            <div className={styles.roundimage}>
                                <Image
                                    src={roundimage}
                                    alt="roundimage"
                                    width={43}
                                    height={43}
                                />
                                <p>1</p>
                            </div>
                            <div className={`d-flex flex-column ${styles.integratingmanafacturing}`}>
                                <p>Integrated Manufacturing</p>
                                <div className={`d-flex flex-column ${styles.management}`}>
                                    <div className={styles.manufacturing}>
                                        Manufacturing Management: <span>Smart factories with real-time optimization and carbon tracking</span>
                                    </div>
                                    <div className={styles.transport}>
                                        Transport and Warehouse Management:<span>Improve visibility, freshness, and feedback integration</span>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className={`d-flex ${styles.content2}`}>
                            <div className={styles.roundimage}>
                                <Image
                                    src={roundimage}
                                    alt="roundimage"
                                    className={styles.roundimage}
                                    width={43}
                                    height={43}
                                />
                                <p>2</p>
                            </div>
                            <div className={`d-flex flex-column ${styles.economy}`}>
                                <p>Mobility Circular Economy</p>
                                <div className={`d-flex flex-column ${styles.digital}`}>
                                    <div className={styles.mobility}>
                                        Mobility Aftermarket Super App: <span> Connect customers to services with transparent pricing</span>
                                    </div>
                                    <div className={styles.vehicle}>
                                        Vehicle Digital Inspection:<span>Automated AI-powered vehicle inspections and valuationsn</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
)
}
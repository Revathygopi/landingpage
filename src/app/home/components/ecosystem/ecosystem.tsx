import styles from './ecosystem.module.css';
import Image from 'next/image';
import banner from '../images/ecosystemimage.png';
export default function Ecosystem() {
    return (
        <div className={` d-flex justify-content-center  align-items-center  ${styles.container}`}>
            <div className={`d-flex  justify-content-center  align-items-center  justify-content-between ${styles.imagecontainer}`}>
                <Image
                    src={banner}
                    alt="logo"
                    className={`img-fluid ${styles.ecosystemimage}`}
                    width={386}
                    height={403}
                />
                <div className={` d-flex flex-column mt-4 ${styles.content}`}>
                    <div className={styles.heading}>
                        Building Interconnected Ecosystems for the Future
                    </div>
                    <div className={styles.content1}>
                        <div>
                            At Solwer,<span> we facilitate cross-border and cross-industry data exchange to establish two robust ecosystems: Integrated Manufacturing and Mobility Circular Economy.</span>
                        </div>

                        <div> Our value proposition<span> provides peace of mind through a robust, risk-resistant supply chain, ensuring seamless operations.</span></div>
                    </div>


                </div>
            </div>

        </div>
    )
}
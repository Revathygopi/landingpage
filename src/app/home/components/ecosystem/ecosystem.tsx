import styles from './ecosystem.module.css';
import Image from 'next/image';
import banner from '../images/ecosystemimage.png';
export default function Ecosystem() {
    return (
        <div className={` d-flex justify-content-center  align-items-center pt-5  ${styles.container}`}>
            <div className={styles.imagecontainer}>
                <Image
                    src={banner}
                    alt="logo"
                    className={`img-fluid`}
                    width={387}
                    height={403}
                />
            </div>
            <div className={` p-5 ${styles.content}`}>
                <div className={styles.heading}>
                    Building Interconnected Ecosystems for the Future
                </div>
                <div className={styles.content1}>
                    <span style={{ fontWeight: 'bold', color: 'black' }}>At Solwer</span>, we facilitate cross-border and cross-industry data exchange to establish two robust ecosystems: Integrated Manufacturing and Mobility Circular Economy.<br />
                    <span style={{ fontWeight: 'bold', color: 'black' }}>Our value proposition</span> provides peace of mind through a robust, risk-resistant supply chain, ensuring seamless operations.
                </div>

            </div>

        </div>
    )
}
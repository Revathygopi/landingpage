import styles from './footer.module.css';
import Image from 'next/image';
import footerimage from '../images/footerimage1.png'
import rightquote from '../images/rightquote.png';
import leftquote from '../images/leftquote.png';
import footerlogo from '../images/footerlogo.png'
import youtube from '../images/YouTube.png';
import instagram from '../images/Instagram.png';
import twitter from '../images/Twitter.png';
import linkdn from '../images/LinkedIn.png'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.testinomial}>
                <div className={styles.commitment}>
                    <div className={styles.content}>
                        <div className={styles.heading}>
                            Our Commitment to a Sustainable Future
                        </div>
                        <div className={styles.formatquote}>
                            <div className={styles.rightquote}>
                                <Image
                                    src={rightquote}
                                    alt="quotesymbol"
                                    width={30}
                                    height={21}
                                />
                            </div>
                            <div className={styles.leftquote}>
                                <Image
                                    src={leftquote}
                                    alt="quotesymbol"
                                    className={styles.quotesymbol}
                                    width={30}
                                    height={21}
                                />
                            </div>
                        </div>
                        <div className={styles.solwermission}>
                            At Solwer, our mission is to create a better world through lean and clean innovation, providing digital solutions to optimize
                            operations and reduce environmental impact
                        </div>

                    </div>

                    <div className={styles.footerimage}>
                        <Image
                            src={footerimage}
                            alt="footer-image"
                            width={600}
                            height={472}
                        />
                    </div>
                </div>

            </div>
            <div className={`d-flex ${styles.footer}`}>
                <div className={styles.footerlogo}>
                    <Image
                        src={footerlogo}
                        alt="Logo"
                        width={101}
                        height={24}
                    />
                </div>
                <div className={`d-flex  ${styles.footerrightpart}`}>
                    <div className={`d-flex  ${styles.contactus}`}>
                        <div className={styles.privacy}>
                            Privacy Policy
                        </div>
                        <div className={styles.conditions}>
                            Terms & Conditions
                        </div>
                        <div className={styles.contact}>
                            Contact
                        </div>
                    </div>
                    <div className={`d-flex ${styles.socialmedia}`}>
                        <div className={styles.youtube}>
                            <Image
                                src={youtube}
                                alt="youtube"
                                width={20}
                                height={20}
                            />
                        </div>
                        <div className={styles.instagram}>
                            <Image
                                src={instagram}
                                alt="instagram"
                                width={20}
                                height={20}
                            />
                        </div>
                        <div className={styles.twitter}>
                            <Image
                                src={twitter}
                                alt="quotesymbol"
                                width={20}
                                height={20}
                            />
                        </div>
                        <div className={styles.linkdn}>
                            <Image
                                src={linkdn}
                                alt="quotesymbol"
                                width={20}
                                height={20}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
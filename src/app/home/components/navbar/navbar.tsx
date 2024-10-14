
import styles from './navbar.module.css';
import Image from 'next/image';
import Logo from '../images/logo.png'

export default function Navbar() {
    return (
        <div className={`container-fluid d-flex align-items-center justify-content-between ${styles.container}`}>
            <div className={styles.logo}>
                <Image
                    src={Logo}
                    alt="logo"
                    width={102}
                    height={48}
                />
            </div>
            <nav className={styles.navbar}>
                <ul className={` d-flex text-center justify-content-between ${styles.navicon}`}>
                    <li>Home</li>
                    <li>Video</li>
                    <li>Product Brochure</li>
                    <li>Solutions</li>
                    <li>Our Mission</li>
                </ul>
            </nav>
            </div>
    );
}

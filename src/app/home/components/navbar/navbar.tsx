// import styles from './navbar.module.css';
// import Image from 'next/image';
// export default function Navbar() {
//     return (
//         <div >
//             <div className={styles.logo}>
//             <Image
//           className={styles.logo}
//           src="https://nextjs.org/icons/next.svg"
//           alt="logo"
//           width={102}
//           height={48}
//           priority
//         />

//             </div>
//             <nav className={styles.navbar}>
//                 <ul className={styles.navicon}>
//                     <li>Home</li>
//                 </ul>
//                 <ul  className={styles.navicon}>
//                     <li>Video</li>
//                 </ul>
//                 <ul  className={styles.navicon}>
//                     <li>Product Brouchure</li>
//                 </ul>
//                 <ul  className={styles.navicon}>
//                     <li>Solutions</li>
//                 </ul>
//                 <ul  className={styles.navicon}>
//                     <li>Our Mission</li>
//                 </ul>
//             </nav>

//         </div>
//     )
// }
import styles from './navbar.module.css';
import Image from 'next/image';
import Logo from '../images/logo.png'

export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image
                    src={Logo}
                    alt="logo"
                    width={102}
                    height={48}
                />
            </div>
            <nav className={styles.navbar}>
                <ul className={styles.navicon}>
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

import React from 'react'
import Link from 'next/link';

// Styles
import styles from "./Navbar.module.css";

// Icons
import { GoHomeFill } from "react-icons/go";
import { MdAmpStories } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { BiSolidPhoneCall } from "react-icons/bi";

const Navbar = () => {

    return (
        <nav className={styles.app__navbar}>
            <div className={styles.nav__center}>

                {/* Navigations */}

                <ul className={styles.nav__menu}>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/#projects'>Projects</Link></li>
                    <li><Link href='#contact'>Contact</Link></li>
                </ul>

                {/* Small Screen Menu */}

                <ul className={styles.nav__smscreen}>
                    <li><Link href='/'><GoHomeFill/></Link></li>
                    <li><Link href='/about'><SiAboutdotme/></Link></li>
                    <li><Link href='/#projects'><MdAmpStories/></Link></li>
                    <li><Link href='#contact'><BiSolidPhoneCall/></Link></li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar
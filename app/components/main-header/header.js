import Link from "next/link"
import logoImg from '@/assets/logo.png'
import Classname from './main-header.module.css';
import Image from "next/image";
import MainHeaderBackground from './main-header-background';

const Header = () =>{
    return (
        <>
        <MainHeaderBackground></MainHeaderBackground>
        <header className={Classname.header}>
            <Link href="/" className={Classname.logo}>
                <Image src={logoImg} alt="A plate with food on it"/>
                Next Level Food
            </Link>
            <nav className={Classname.nav}>
                <ul>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                     <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/meals/share">Share</Link>
                    </li>
                    <li>
                        <Link href="/meals/page1">Page1</Link>
                    </li>
                    <li>
                        <Link href="/meals/page2">Page2</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Header;
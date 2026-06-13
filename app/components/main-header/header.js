import Link from "next/link"
import logoImg from '@/assets/logo.png'
import Classname from './main-header.module.css';
import Image from "next/image";
import MainHeaderBackground from './main-header-background';
import Nav from "../nav/nav";

const Header = () =>{
    return (
        <>
        <MainHeaderBackground></MainHeaderBackground>
        <header className={Classname.header}>
            <Link href="/" className={Classname.logo}>
                <Image src={logoImg} alt="A plate with food on it"/>
                Next Level Food
            </Link>
           <Nav></Nav>
        </header>
        </>
    )
}

export default Header;
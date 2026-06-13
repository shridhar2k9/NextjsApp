'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Classname from '../main-header/main-header.module.css';

const Nav = () =>{
    const path = usePathname()

    return (
         <nav className={Classname.nav}>
                <ul>
                    <li>
                        <Link href="/community" className={path === '/community' ? Classname.active : undefined}>Foodies Community</Link>
                    </li>
                     <li>
                        <Link href="/meals" className={path.startsWith('/meals') ? Classname.active : undefined}>Browse Meals</Link>
                    </li>
                </ul>
            </nav>
    )
}

export default Nav;
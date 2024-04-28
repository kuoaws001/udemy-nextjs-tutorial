'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ href, children }) => {
    const path = usePathname();

    return (
        <Link
            href={href}
            // className={path.startsWith(href) ? class.active : undefined}
        >
            {children}
        </Link>
    )
}

export default NavLink

// className={ a ? `${styles.base} ${styles.a}`:styles.base}
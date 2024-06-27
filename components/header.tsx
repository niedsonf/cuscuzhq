import clsx from "clsx";
import Link from "next/link";

export function Header() {
    return (
        <nav className={clsx(
            "fixed top-2 bg-gray-700 z-10 text-base left-1/2 -translate-x-1/2",
            "flex gap-4 px-4 rounded overflow-hidden shadow",
        )}>
            <Link className="header-action" href="/">
                Home
            </Link>
            <Link className="header-action" href="/">
                Cuscuz HQ
            </Link>
            <Link className="header-action" href="/">
                Editais e Links
            </Link>
            <Link className="header-action" href="/">
                Parcerias
            </Link>
        </nav>
    )
}
import Link from 'next/link'

type LinkType = {
    id: number,
    title: string,
    url: string,
}

const links : LinkType[] = [
    {
        id: 1, 
        title: "Home",
        url: "/",
    },
    {
        id: 2, 
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact"
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard"
    }
]

export default function Navbar() {
    return (
        <>
            {links.map(link => 
                <Link href = {link.url} key = {link.id}>
                    {link.title}
                </Link>)}
        </>
    )
}
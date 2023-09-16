const nav_item = [
    {
        title: 'Demos',
        link: '',
    },
    {
        title: 'About Us',
        link: '',
    },
    {
        title: 'Team',
        link: '',
    },
    {
        title: 'Services',
        link: '',
    },
    {
        title: 'Pages',
        link: '',
    },
]
function Header() {
    return (
        <header className="mx-auto flex h-10 items-center justify-evenly transition-all duration-200 ease-in hover:bg-black hover:text-white lg:w-[80rem]">
            <div className="flex-1">Logo</div>
            <ul className="flex flex-1 cursor-pointer items-center justify-evenly gap-5">
                {nav_item.map((item: any, key: number) => (
                    <li className="list-none" key={key}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Header

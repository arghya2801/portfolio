import React from 'react'
// import {
//     NavigationMenu,
//     // NavigationMenuContent,
//     // NavigationMenuIndicator,
//     NavigationMenuItem,
//     // NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
//     // NavigationMenuViewport,
// } from "@/components/ui/navigation-menu"


const Navbar = () => {
    return (
        <>
            <div className="h-20 sticky top-0 flex justify-between items-center gap-x-4 px-20 text-4xl bg-gradient-to-b from-background to-opacity-50">
                <div> </div>
                <nav className="flex gap-x-4">
                    <a href="#" className="relative hover:underline group">
                        <span className="group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">Home</span>
                        <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent to-primary transition duration-300 group-hover:w-full group-hover:h-0.5" />
                    </a>
                    <a href="#" className="relative hover:underline group">
                        <span className="group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">Projects</span>
                        <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent to-primary transition duration-300 group-hover:w-full group-hover:h-0.5" />
                    </a>
                    <a href="#" className="relative hover:underline group">
                        <span className="group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">About</span>
                        <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent to-primary transition duration-300 group-hover:w-full group-hover:h-0.5" />
                    </a>
                </nav>
                {/* <NavigationMenu>
                    <NavigationMenuList className='text-4xl'>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>About</NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu> */}
            </div>

        </>

    )
}

export default Navbar
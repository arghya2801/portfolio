import React from 'react'
import {
    NavigationMenu,
    // NavigationMenuContent,
    // NavigationMenuIndicator,
    NavigationMenuItem,
    // NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    // NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


const Navbar = () => {
    return (
        <>
            <div className="h-20 sticky top-0 flex justify-between items-center gap-x-4 px-20 text-4xl bg-gradient-to-b from-background to-opacity-50">
                <div>Icon</div>
                <NavigationMenu>
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
                </NavigationMenu>
            </div>

        </>

    )
}

export default Navbar
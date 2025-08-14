import React from "react";
import Logo from '@/assets/images/logo-samawa.svg';

type Props = {};

function Header({ }: Props) {
    return (
        <header className="flex justify-between container mx-auto items-center pt-8 -mb-8">
            <span className="flex gap-x-3 items-center">
                <span className="text-color2">
                    <Logo />
                </span>
                <span className="text-2xl font-bold cursor-default">Samawa</span>
            </span>

            <ul className="flex gap-x-10">
                <li>
                    {/*<a href="/index.html" className="font-bold hover:underline" aria-current="true">
                        Home
                    </a>*/}
                </li>
                <li>
                    <a href="/category.html" className="hover:underline">
                        Category
                    </a>
                </li>
                <li>
                    <a href="/packages.html" className="hover:underline">
                        Packages
                    </a>
                </li>
                <li>
                    <a href="/testimonials.html" className="hover:underline">
                        Testimonials
                    </a>
                </li>
            </ul>

            <ul className="flex gap-x-4">
                <li>
                    <a
                        href="/contacts.html"
                        className="border border-dark1 px-5 py-3 rounded-full font-semibold"
                    >
                        Contact Us
                    </a>
                </li>
                <li>
                    <a
                        href="/contacts.html"
                        className="border transparent bg-color2 text-light1 px-5 py-3 rounded-full font-semibold"
                    >
                        Contact Us
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default Header;

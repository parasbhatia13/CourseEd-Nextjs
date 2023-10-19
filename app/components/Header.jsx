import Link from 'next/link';
import React from 'react';

// Header component that displays navigation links
const Header = () => {
    return (
        <header className="header">
            <div className="container">
                {/* Logo linking to the home page */}
                <div className="logo">
                    <Link href="/">Course Ed</Link>
                </div>
                {/* Navigation links */}
                <div className="links">
                    <Link href="/about">About</Link>
                    <Link href="/about/team">Our Team</Link>
                    <Link href="/code/repos">Code</Link>
                </div>
            </div>
        </header>
    );
}

export default Header; // Export the Header component

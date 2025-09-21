'use client';
import Link from 'next/link';

export const Nav = () => {
  return (
    <nav className="components-Nav">
      <ul className="ul-Nav">
        <li className="li-Nav">
          <Link href="/">Welcome</Link>
        </li>

        <li className="li-Nav">
          <Link href="/techskills">Tech Skills</Link>
        </li>

        <li className="li-Nav">
          <Link href="/techbooks">Tech Books</Link>
        </li>
      </ul>
    </nav>
  );
};

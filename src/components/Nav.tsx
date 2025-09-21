'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export const Nav = () => {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <nav className="components-Nav">
      <ul className="ul-Nav">
        <li className="li-Nav">
          <Link
            href="/"
            className={activeSegment === '(welcome)' ? 'text-yellow-200' : ''}
          >
            Welcome
          </Link>
        </li>

        <li className="li-Nav">
          <Link
            href="/techskills"
            className={activeSegment === 'techskills' ? 'text-yellow-200' : ''}
          >
            Tech Skills
          </Link>
        </li>

        <li className="li-Nav">
          <Link
            href="/techbooks"
            className={activeSegment === 'techbooks' ? 'text-yellow-200' : ''}
          >
            Tech Books
          </Link>
        </li>
      </ul>
    </nav>
  );
};

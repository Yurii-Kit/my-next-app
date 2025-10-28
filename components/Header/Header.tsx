// components/Header/Header.tsx

import Link from 'next/link';

import CategoriesMenu from '../CategoriesMenu/CategoriesMenu';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import css from './Header.module.css';

const Header = async () => {
  // Прибираємо запит
  // const categories = await getCategories()
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            {/* Пропс categories тепер не приходять з SSR */}
            <CategoriesMenu />
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          {/* Відображаємо компонент */}
          <AuthNavigation />
        </ul>
      </nav>
    </header>
  );
};

export default Header;

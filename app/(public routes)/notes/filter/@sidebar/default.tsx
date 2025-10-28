// app/(public routes)/notes/filter/@sidebar/default.tsx

import Link from 'next/link';
import { getCategories } from '@/lib/api/clientApi';
import styles from './sidebar.module.css';

const NotesSidebar = async () => {
  const categories = await getCategories();

  return (
    <nav className={styles.sidebar}>
      <Link href="/notes/action/create" className={styles.createBtn}>
        ➕ Create note
      </Link>

      <ul className={styles.menu}>
        <li>
          <Link href={`/notes/filter/all`} className={styles.link}>
            🗂️ All notes
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/notes/filter/${category.id}`} className={styles.link}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NotesSidebar;

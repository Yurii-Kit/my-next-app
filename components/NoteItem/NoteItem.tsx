// components/NoteItem/NoteItem.tsx

// import Link from 'next/link';
// import { Note } from '@/lib/api';

// type Props = {
//   item: Note;
// };

// const NoteItem = ({ item }: Props) => {
//   return (
//     <li>
//       <Link href={`/notes/${item.id}`}>{item.title}</Link>
//     </li>
//   );
// };

// export default NoteItem;

import Link from 'next/link';
import { Note } from '@/lib/api';
import css from './NoteItem.module.css';

type Props = {
  item: Note;
};

const NoteItem = ({ item }: Props) => {
  return (
    <li className={css.card}>
      <Link href={`/notes/${item.id}`} className={css.link}>
        <h3 className={css.title}>{item.title}</h3>
        <p className={css.content}>
          {item.content.length > 100
            ? item.content.slice(0, 100) + '...'
            : item.content}
        </p>

        <div className={css.meta}>
          <span className={css.category}>📂 {item.categoryId}</span>
          <time className={css.date}>
            {new Date(item.createdAt).toLocaleDateString()}
          </time>
        </div>
      </Link>
    </li>
  );
};

export default NoteItem;

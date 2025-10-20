// app/notes/filter/layout.tsx
import css from './layout.module.css';

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar }: Props) => {
  return (
    <section className={css.wrapper}>
      <aside className={css.aside}>{sidebar}</aside>
      {children}
    </section>
  );
};

export default NotesLayout;

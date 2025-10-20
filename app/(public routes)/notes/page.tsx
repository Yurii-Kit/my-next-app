// "use server";!!!!!!!!!!!!!!!!
import { getNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';
import css from './page.module.css';

const Notes = async () => {
  const response = await getNotes();

  return (
    <section className={css.list}>
      <h1>Notes List</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </section>
  );
};

export default Notes;

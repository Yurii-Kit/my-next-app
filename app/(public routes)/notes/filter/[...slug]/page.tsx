// app/notes/filter/[...slug]/page.tsx

import { getNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';

type Props = {
  params: Promise<{ slug?: string[] }>;
};

const NotesByCategory = async ({ params }: Props) => {
  const { slug } = await params;

  // безпечна обробка порожнього slug
  const category =
    slug && slug.length > 0 && slug[0] !== 'all' ? slug[0] : undefined;

  const response = await getNotes(category);

  return (
    <div>
      <h1>Notes List</h1>
      {response?.notes?.length > 0 ? (
        <NoteList notes={response.notes} />
      ) : (
        <p>No notes found.</p>
      )}
    </div>
  );
};

export default NotesByCategory;

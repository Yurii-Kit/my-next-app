'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

import { getSingleNote } from '@/lib/api/api';
import css from './NoteDetails.client.module.css';

const NoteDetailsClient = () => {
  const router = useRouter();

  const { id } = useParams<{ id: string }>();

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => getSingleNote(id),
    refetchOnMount: false,
  });

  const handleGoBack = () => {
    const isSure = confirm('Are you sure?');
    if (isSure) {
      router.back();
    }
  };

  if (isLoading) return <p className={css.noteLoading}>Loading...</p>;

  if (error || !note) return <p className={css.noteError}>Some error..</p>;

  const formattedDate = note.updatedAt
    ? `Updated at: ${note.updatedAt}`
    : `Created at: ${note.createdAt}`;

  return (
    <div className={css.noteWrapper}>
      <div className={css.noteDetails}>
        <button onClick={handleGoBack}>Back</button>
        <h2 className={css.noteTitle}>{note.title}</h2>
        <p className={css.noteContent}>{note.content}</p>
        <p className={css.noteDate}>{formattedDate}</p>

        {note.category && (
          <div className={css.noteCategory}>
            <span className={css.categoryLabel}>{note.category.name}</span>
            <p className={css.categoryDescription}>
              {note.category.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteDetailsClient;

// app/notes/action/create

import { getCategories } from '@/lib/api';
import NoteForm from '@/components/NoteForm/NoteForm';

const CreateNote = async () => {
  const categories = await getCategories();
  console.log(categories);

  return (
    <>
      <NoteForm categories={categories} />
    </>
  );
};

export default CreateNote;

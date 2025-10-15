// lib/api.ts

import axios from 'axios';

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type Note = {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  userId: string | null;
  createdAt: string;
  updatedAt: string;
  category?: Category;
};

export type NoteListResponse = {
  notes: Note[];
  total: number;
};

axios.defaults.baseURL = 'https://next-docs-9f0504b0a741.herokuapp.com';

export const getNotes = async () => {
  const res = await axios.get<NoteListResponse>('/notes');
  return res.data;
};

export const getSingleNote = async (id: string) => {
  const res = await axios.get<Note>(`/notes/${id}`);
  return res.data;
};

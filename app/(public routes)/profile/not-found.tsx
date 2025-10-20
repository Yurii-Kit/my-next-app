// app/profile/not-found.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfileNotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/profile'); // редірект на сторінку профілю
    }, 3000);

    return () => clearTimeout(timer); // очищаємо таймер при анмаунті
  }, [router]);

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>404 — Сторінку профілю не знайдено</h1>
      <p>Вас буде перенаправлено назад У профіль через 3 секунди…</p>
    </div>
  );
}

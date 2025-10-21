// components/Modal/Modal.tsx

'use client';
import css from './Modal.module.css';

import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  const router = useRouter();

  const close = () => router.back();

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button className={css.modalBtn} onClick={close}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

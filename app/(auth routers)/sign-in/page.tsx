'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login, LoginRequest } from '@/lib/api';
import { ApiError } from '@/app/api/api';
import { useAuthStore } from '@/lib/stores/AuthStore';
import css from './SignIn.module.css';

const SignIn = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  // Отримуємо метод із стора
  const setUser = useAuthStore((state) => state.setUser);

  const handleSubmit = async (formData: FormData) => {
    try {
      const formValues = Object.fromEntries(formData) as LoginRequest;
      console.log('Form Values:', formValues);

      const res = await login(formValues);

      if (res) {
        // Записуємо користувача у глобальний стан
        setUser(res);
        router.push('/profile');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError(
        (error as ApiError).response?.data?.error ??
          (error as ApiError).message ??
          'Oops... some error',
      );
    }
  };

  return (
    <div className={css.formContainer}>
      <h1 className={css.title}>Sign in</h1>

      <form className={css.form} action={handleSubmit}>
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Login info</legend>

          <label className={css.label}>
            Email
            <input
              type="email"
              name="email"
              required
              className={css.input}
              placeholder="Enter your email"
            />
          </label>

          <label className={css.label}>
            Password
            <input
              type="password"
              name="password"
              required
              className={css.input}
              placeholder="Enter your password"
            />
          </label>
        </fieldset>

        <button type="submit" className={css.button}>
          Log in
        </button>
      </form>

      {error && <p className={css.error}>{error}</p>}
    </div>
  );
};

export default SignIn;

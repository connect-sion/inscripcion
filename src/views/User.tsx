import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from '../components/Button';
import { Input } from '../components/form/Input';
import Layout from '../components/Layout';
import { useDbContext } from '../hooks/useDbContext';
import * as texts from '../utils/translation';

interface InputType<T> {
  value: T;
  error?: string;
}
interface NameForm {
  firstname: InputType<string>;
  lastname: InputType<string>;
}

export default function User() {
  let history = useHistory();
  const { phone } = useParams<{ phone: string }>();
  const { user } = useDbContext();

  const [form, setForm] = useState<NameForm>({
    firstname: { value: '' },
    lastname: { value: '' },
  });

  return (
    <Layout subtitle={(lang) => texts[lang].newUser}>
      {(lang) => (
        <>
          <div className="flex justify-between">
            <Input
              name="firstname"
              label={texts[lang].firstname}
              value={form.firstname.value}
              error={form.firstname.error}
              onChange={(e) => {
                const { value } = e.currentTarget;
                const error = !value ? 'Nombre es necesario' : undefined;
                setForm({ ...form, firstname: { value, error } });
              }}
            />
            <Input
              name="lastname"
              label={texts[lang].lastname}
              value={form.lastname.value}
              error={form.lastname.error}
              onChange={(e) => {
                const { value } = e.currentTarget;
                const error = !value ? 'Nombre es necesario' : undefined;
                setForm({ ...form, lastname: { value, error } });
              }}
            />
          </div>
          <div className="flex justify-between">
            <Button
              text={texts[lang].cancel}
              onClick={() => history.push('/')}
              color="danger"
            />
            <Button
              text={texts[lang].verify}
              onClick={async () => {
                await user.doc(phone).set({
                  firstname: form.firstname.value,
                  lastname: form.lastname.value,
                });
                history.push('/');
              }}
              color="success"
            />
          </div>
        </>
      )}
    </Layout>
  );
}

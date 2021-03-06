import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

import Button from '../components/Button';
import { Input } from '../components/form/Input';
import Layout from '../components/Layout';
import { useDbContext } from '../hooks/useDbContext';
import * as texts from '../utils/translation';
import { getChurch } from '../utils/utils';

interface CompanionsType {
  phone: string;
  companions: number;
}

export default function Cancel() {
  let history = useHistory();
  const { place } = useDbContext();
  const date = new Date().toLocaleDateString('fr-CH');

  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);

  return (
    <Layout subtitle={() => date}>
      {(lang) => (
        <>
          <div className="flex justify-between">
            <Input
              name="phone"
              label={texts[lang].phone}
              value={phone}
              onChange={(e) => setPhone(e.currentTarget.value)}
            />

            <div
              className={clsx(
                'w-48',
                message === texts[lang].deleteCorrect
                  ? 'text-success-600'
                  : 'text-danger-600',
              )}
            >
              {message || texts[lang].confirmDelete}
            </div>
          </div>
          <div className="flex justify-between">
            <Button
              text={texts[lang].return}
              onClick={() => history.push('/')}
            />
            <Button
              text={texts[lang].verify}
              onClick={async () => {
                const church = getChurch();
                const currGet = await place.doc(date).get();
                const currDate = currGet.data() || {};
                const listPeople: CompanionsType[] = currDate[church] || [];
                const index = listPeople
                  .map((curr) => curr.phone)
                  .indexOf(phone);
                if (index < 0) {
                  setMessage(texts[lang].userNotFound);
                } else {
                  await place.doc(date).set({
                    ...currDate,
                    [church]: listPeople.filter((_, i) => i !== index),
                  });
                  setMessage(texts[lang].deleteCorrect);
                }
              }}
              color="danger"
            />
          </div>
        </>
      )}
    </Layout>
  );
}

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

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

export default function Verify() {
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
            {message && <div className="w-48">{message}</div>}
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
                const currDate = await place.doc(date).get();
                const listPeople: CompanionsType[] =
                  (currDate.data() || {})[church] || [];
                const index = listPeople
                  .map((curr) => curr.phone)
                  .indexOf(phone);
                setMessage(
                  index < 0
                    ? texts[lang].userNotFound
                    : texts[lang].correct(listPeople[index].companions),
                );
              }}
              color="success"
            />
          </div>
        </>
      )}
    </Layout>
  );
}

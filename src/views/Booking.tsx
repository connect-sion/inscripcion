import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../components/Button';
import { Input } from '../components/form/Input';
import Layout from '../components/Layout';
import { useDbContext } from '../hooks/useDbContext';
import * as texts from '../utils/translation';
import { capitalize, getChurch } from '../utils/utils';

interface InputType<T> {
  value?: T;
  error?: string;
}

interface BookingState {
  phone: InputType<string>;
  companions: InputType<number>;
}

interface CompanionsType {
  phone: string;
  companions: number;
}

export default function Booking() {
  let history = useHistory();

  const { church, place, user } = useDbContext();
  const [limits, setLimits] = useState({ limit: 0, current: 0, name: '' });
  useEffect(() => {
    const churchStorage = getChurch();
    const date = new Date().toLocaleDateString('fr-CH');

    // Get the church limit and current assistents
    const listProm = [church.doc(churchStorage).get(), place.doc(date).get()];
    Promise.all(listProm).then(([currChurch, currDate]) => {
      const { limit } = currChurch.data() || {};
      const dateData = currDate.data() || {};
      const listCompanions: CompanionsType[] = dateData[churchStorage] || [];

      setLimits({
        limit,
        name: churchStorage,
        current: listCompanions.reduce(
          (acc, { companions }) => acc + companions,
          0,
        ),
      });
    });
  }, [church, place]);

  const [form, setForm] = useState<BookingState>({
    phone: { value: '' },
    companions: { value: 1 },
  });

  const subtitle = `${texts.es.limit} ${capitalize(limits.name)}: ${
    limits.current
  }/${limits.limit}`;
  return (
    <Layout subtitle={subtitle}>
      <div className="flex justify-between">
        <Input
          type="number"
          name="phone"
          label={texts.es.phone}
          value={form.phone.value}
          error={form.phone.error}
          onChange={(e) => {
            const { value } = e.currentTarget;
            const error = value.length > 12 ? 'Número muy largo' : undefined;
            setForm({ ...form, phone: { value, error } });
          }}
        />
        <Input
          type="number"
          name="companions"
          label={texts.es.companions}
          value={form.companions.value}
          error={form.companions.error}
          onChange={(e) => {
            const value = Number(e.currentTarget.value);
            const maxError = value > 5 ? 'Máximo 5 acompañantes' : undefined;
            const minError = value < 1 ? 'Número muy pequeño' : undefined;
            setForm({
              ...form,
              companions: { value, error: maxError || minError },
            });
          }}
        />
      </div>
      <div className="flex justify-between">
        <Button
          text={texts.es.cancel}
          onClick={() => history.push('/')}
          color="danger"
        />
        <Button
          text={texts.es.verify}
          onClick={async () => {
            const churchStorage = getChurch();
            const date = new Date().toLocaleDateString('fr-CH');
            const current = await place.doc(date).get();
            const data = current.data() || {};
            const churchData = data[churchStorage] || [];
            const formData = {
              phone: form.phone.value,
              companions: form.companions.value,
            };
            const newData = {
              ...data,
              [churchStorage]: [...churchData, formData],
            };
            await place.doc(date).set(newData);

            const currUser = await user.doc(form.phone.value).get();
            history.push(currUser.exists ? '/' : '/user');
          }}
          color="success"
        />
      </div>
    </Layout>
  );
}

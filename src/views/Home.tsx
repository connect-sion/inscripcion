import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../components/Button';
import Layout from '../components/Layout';
import * as texts from '../utils/translation';

export default function Home() {
  let history = useHistory();
  return (
    <Layout>
      {(lang) => (
        <div className="flex justify-between">
          <Button
            text={texts[lang].booking}
            onClick={() => history.push('/booking')}
            color="primary"
          />
          <Button
            text={texts[lang].verify}
            onClick={() => history.push('/verify')}
            color="success"
          />
          <Button
            text={texts[lang].cancel}
            onClick={() => history.push('/cancel')}
            color="danger"
          />
        </div>
      )}
    </Layout>
  );
}

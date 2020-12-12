import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../components/Button';
import Layout from '../components/Layout';
import * as texts from '../utils/translation';

export default function Home() {
  let history = useHistory();
  return (
    <Layout>
      <div className="flex justify-between">
        <Button
          text={texts.es.booking}
          onClick={() => history.push('/booking')}
        />
        <Button
          text={texts.es.verify}
          onClick={() => history.push('/verify')}
        />
        <Button
          text={texts.es.cancel}
          onClick={() => history.push('/cancel')}
        />
      </div>
    </Layout>
  );
}

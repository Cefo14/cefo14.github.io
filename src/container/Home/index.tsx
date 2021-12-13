import React from 'react';

import NesText from '../../components/NesText';
import NesContainer from '../../components/NesContainer';
import NesProgress from '../../components/NesProgress';

import useStyles from './useStyles';

const Home = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <NesText component="h1">
        RPG Title
      </NesText>
      <NesContainer title="Player" rounded>
        <NesText variant="warning">
          Cefo14
        </NesText>
      </NesContainer>
      <NesContainer title="Role Class" rounded>
        <NesText variant="warning">
          Full Stack
        </NesText>
      </NesContainer>
      <NesContainer title="Description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
        perspiciatis dolorum! Vero placeat numquam excepturi voluptates eligendi,
        officia atque modi quo maiores vel natus ut suscipit, impedit incidunt iste optio.
      </NesContainer>
      <NesContainer title="Stats">
        <NesProgress value={75} max={100} variant="success" />
        <NesProgress value={50} max={100} variant="warning" />
        <NesProgress value={25} max={100} variant="error" />
      </NesContainer>
    </div>
  );
};

export default Home;

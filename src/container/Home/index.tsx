import React from 'react';

import NesText from '../../components/NesText';
import NesContainer from '../../components/NesContainer';
import NesStatistic from '../../components/NesStatistic';

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
      <NesContainer title="Statistics">
        <NesStatistic
          name="Javascript"
          value={250}
          maxValue={255}
        />
        <NesStatistic
          name="PHP"
          value={127}
          maxValue={255}
        />
        <NesStatistic
          name="Python"
          value={63}
          maxValue={255}
        />
      </NesContainer>
    </div>
  );
};

export default Home;

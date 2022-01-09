import { Columns } from 'react-bulma-components';

import NesText from '../../components/NesText';
import NesContainer from '../../components/NesContainer';
import NesStatistic from '../../components/NesStatistic';
import NesRPGDialog from '../../components/NesRPGDialog';
import DevIcon from '../../components/DevIcon';

import kirby8BitsImage from '../../assets/images/kirby_8bits.png';

import useStyles from './useStyles';

const MAX_STATISTICS = 255;

const Home = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <NesText component="h1">
          Menu
          <DevIcon
            icon="github"
            className={styles.githubIcon}
          />
        </NesText>
      </div>
      <Columns>
        <Columns.Column
          size={4}
        >
          <NesContainer className={styles.center} rounded>
            <img
              alt="logo"
              src={kirby8BitsImage}
              width={200}
              height={200}
            />
          </NesContainer>
        </Columns.Column>
        <Columns.Column>
          <div className={styles.roleNameContainer}>
            <NesContainer title="Player" rounded>
              <NesText variant="warning">
                Cefo14
              </NesText>
            </NesContainer>
            <NesContainer title="LV" rounded>
              <NesText variant="warning">
                75
              </NesText>
            </NesContainer>
            <NesContainer title="Role Class" rounded>
              <NesText variant="warning">
                Full Stack Developer
              </NesText>
            </NesContainer>
          </div>
        </Columns.Column>
      </Columns>
      <NesContainer
        title="Description"
        className={styles.descriptionContainer}
      >
        <NesRPGDialog>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          perspiciatis dolorum! Vero placeat numquam excepturi voluptates eligendi,
          officia atque modi quo maiores vel natus ut suscipit, impedit incidunt iste optio.
        </NesRPGDialog>
      </NesContainer>
      <NesContainer
        title="Statistics"
        className={styles.statisticContainer}
      >
        <NesStatistic
          name="Javascript"
          value={234}
          maxValue={MAX_STATISTICS}
        />
        <NesStatistic
          name="Python"
          value={152}
          maxValue={MAX_STATISTICS}
        />
        <NesStatistic
          name="PHP"
          value={132}
          maxValue={MAX_STATISTICS}
        />
      </NesContainer>
    </div>
  );
};

export default Home;

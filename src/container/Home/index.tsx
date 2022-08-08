import { useState, useCallback } from 'react';

import { Columns } from 'react-bulma-components';

import NesText from '../../components/NesText';
import NesContainer from '../../components/NesContainer';
import NesStatistic from '../../components/NesStatistic';
import NesRPGDialog from '../../components/NesRPGDialog';
import NesButton from '../../components/NesButton';
import DevIcon from '../../components/DevIcon';
import SkillBadge from '../../components/SkillBadge';
import Container from '../../components/Container';

import kirby8BitsImage from '../../assets/images/kirby_8bits.png';
import kirby8SwordBitsGif from '../../assets/images/kirby_sword_8bits.gif';

import {
  DESCRIPTION,
  MAX_STATISTICS,
  STATISTICS,
  SKILLS,
} from './config';
import useStyles from './useStyles';

const Home = () => {
  const [descriptionIndex, setDescriptionIndex] = useState(0);

  const styles = useStyles();

  const onClickNextButton = useCallback(() => {
    const maxIndex = DESCRIPTION.length;
    if (descriptionIndex < maxIndex - 1) setDescriptionIndex(descriptionIndex + 1);
    else setDescriptionIndex(0);
  }, [descriptionIndex]);

  return (
    <Container className={styles.container} maxWidth="lg">
      <div className={styles.center}>
        <NesText component="h1">
          Menu
          <a
            href="https://github.com/Cefo14"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.iconLink}
          >
            <DevIcon
              icon="github"
              className={styles.githubIcon}
            />
          </a>
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
              className={styles.avatar}
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
      >
        <div className={styles.descriptionContainer}>
          <NesRPGDialog>
            { DESCRIPTION[descriptionIndex] }
          </NesRPGDialog>
          <div className={styles.nextButtonContainer}>
            <NesButton
              variant="warning"
              onClick={onClickNextButton}
            >
              Next
            </NesButton>
          </div>
        </div>
      </NesContainer>
      <Columns>
        <Columns.Column>
          <NesContainer
            title="Stats"
            className={styles.statisticContainer}
          >
            {
              STATISTICS.map((stat) => (
                <NesStatistic
                  key={stat.label}
                  name={stat.label}
                  value={stat.level}
                  maxValue={MAX_STATISTICS}
                />
              ))
            }
          </NesContainer>
        </Columns.Column>
        <Columns.Column>
          <NesContainer
            className={styles.chartContainer}
          >
            <img
              alt="kirby8SwordBitsGif"
              src={kirby8SwordBitsGif}
              width="max-content"
              height="max-content"
              loading="lazy"
            />
          </NesContainer>
        </Columns.Column>
      </Columns>
      <NesContainer
        title="Skills"
        className={styles.skillsContainer}
      >
        <Columns multiline>
          {
            SKILLS.map((skill) => (
              <Columns.Column
                key={skill.icon}
                desktop={{
                  size: 'one-fifth',
                }}
                tablet={{
                  size: 'one-third',
                }}
                className={styles.center}
              >
                <SkillBadge
                  icon={skill.icon as any} // TODO fix obj type
                  title={skill.title}
                  rate={skill.rate}
                />
              </Columns.Column>
            ))
          }
        </Columns>
      </NesContainer>
    </Container>
  );
};

export default Home;

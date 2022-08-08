import { useState, useCallback } from 'react';

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
      <div className={styles.titleSection}>
        <NesText component="h1">
          Menu
        </NesText>
        <NesText component="h1">
          <a
            href="https://github.com/Cefo14"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.iconLink}
          >
            <DevIcon
              icon="github"
            />
          </a>
        </NesText>
      </div>

      <div className={styles.profileSection}>
        <div className={styles.avatarContainer}>
          <NesContainer rounded>
            <img
              alt="logo"
              src={kirby8BitsImage}
              width={200}
              height={200}
            />
          </NesContainer>
        </div>
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
      </div>

      <NesContainer
        title="Description"
        className={styles.descriptionSection}
      >
        <div className={styles.descriptionContainer}>
          <div className={styles.dialogContainer}>
            <NesRPGDialog>
              { DESCRIPTION[descriptionIndex] }
            </NesRPGDialog>
          </div>
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

      <div className={styles.statisticSection}>
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
        <div className={styles.statisticImageContainer}>
          <NesContainer>
            <img
              alt="kirby8SwordBitsGif"
              src={kirby8SwordBitsGif}
              width="100%"
              height="100%"
              loading="lazy"
            />
          </NesContainer>
        </div>
      </div>

      <NesContainer
        title="Skills"
        className={styles.skillsSection}
      >
        <div className={styles.skillsContainer}>
          {
            SKILLS.map((skill) => (
              <div
                key={skill.icon}
              >
                <SkillBadge
                  icon={skill.icon as any} // TODO fix obj type
                  title={skill.title}
                  rate={skill.rate}
                />
              </div>
            ))
          }
        </div>
      </NesContainer>
    </Container>
  );
};

export default Home;

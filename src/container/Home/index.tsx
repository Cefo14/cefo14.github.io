import { useState, useCallback } from 'react';

import { Columns } from 'react-bulma-components';
import ReactApexChart from 'react-apexcharts';

import NesText from '../../components/NesText';
import NesContainer from '../../components/NesContainer';
import NesStatistic from '../../components/NesStatistic';
import NesRPGDialog from '../../components/NesRPGDialog';
import NesButton from '../../components/NesButton';
import DevIcon from '../../components/DevIcon';

import kirby8BitsImage from '../../assets/images/kirby_8bits.png';

import useStyles from './useStyles';

const DESCRIPTION = [
  `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
    perspiciatis dolorum! Vero placeat numquam excepturi voluptates eligendi,
    officia atque modi quo maiores vel natus ut suscipit, impedit incidunt iste optio. 
  `,
  `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
    perspiciatis dolorum! Vero placeat numquam excepturi voluptates eligendi,
    officia atque modi quo maiores vel natus ut suscipit, impedit incidunt iste optio. 
  `.split('').reverse().join(''),
];

const MAX_STATISTICS = 255;

const STATISTICS = [
  {
    label: 'Typescript',
    level: 242,
  },
  {
    label: 'JS',
    level: 240,
  },
  {
    label: 'Python',
    level: 183,
  },
  {
    label: 'PHP',
    level: 180,
  },
  {
    label: 'SQL',
    level: 152,
  },
];

const config = {
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      foreColor: '#FFF',
      fontFamily: '"Press Start 2P"',
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          colors: STATISTICS.map(() => '#FFF'),
          fontSize: '11px',
          fontFamily: '"Press Start 2P"',
        },
      },
    },
    colors: ['#92cc41'],
    stroke: {
      width: 12,
    },
    fill: {
      opacity: 1,
    },
    labels: STATISTICS.map((stat) => stat.label),
    markers: {
      size: 4,
      strokeColors: '#FFF',
      colors: STATISTICS.map(() => '#FFF'),
    },
  },
  series: [
    {
      data: STATISTICS.map((stat) => stat.level),
    },
  ],
};

const Home = () => {
  const [descriptionIndex, setDescriptionIndex] = useState(0);

  const styles = useStyles();

  const onClickNextButton = useCallback(() => {
    const maxIndex = DESCRIPTION.length;
    if (descriptionIndex < maxIndex - 1) setDescriptionIndex(descriptionIndex + 1);
    else setDescriptionIndex(0);
  }, [descriptionIndex]);

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
            title="Stats Chart"
            className={styles.chartContainer}
          >
            <ReactApexChart
              options={config.options}
              series={config.series}
              type="radar"
              height="100%"
              width="100%"
            />
          </NesContainer>
        </Columns.Column>
      </Columns>
    </div>
  );
};

export default Home;

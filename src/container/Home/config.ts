export const DESCRIPTION = [
  [
    'Hi!',
    'Im a Software developer and my interests are Web Development, Software Architecture and Open Source',
    'I love the music, video games and coffee!.',
  ].join('\n\n'),

  [
    'In my free time I like to learn and test new technologies',
    'I also enjoy reading, programming and above all listening to music while having a cup of good coffee❤️.',
  ].join('\n\n'),

  Array(3).fill(undefined).map((value, index) => '.'.repeat(3 - index)).join(' '),
];

export const MAX_STATISTICS = 255;

export const STATISTICS = [
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
  {
    label: 'Shell Script',
    level: 137,
  },
];

export const SKILLS = [
  {
    icon: 'react',
    title: 'React',
    rate: 3,
  },
  {
    icon: 'vue',
    title: 'Vue',
    rate: 2,
  },
  {
    icon: 'angular',
    title: 'Angular',
    rate: 1.5,
  },
  {
    icon: 'nodejs',
    title: 'Node JS',
    rate: 3,
  },
  {
    icon: 'graphql',
    title: 'Graphql',
    rate: 2.5,
  },
  {
    icon: 'docker',
    title: 'Docker',
    rate: 2.5,
  },
  {
    icon: 'aws',
    title: 'AWS',
    rate: 2.5,
  },
  {
    icon: 'linux',
    title: 'Linux',
    rate: 2,
  },
  {
    icon: 'postgresql',
    title: 'SQL',
    rate: 2,
  },
  {
    icon: 'mongodb',
    title: 'No-SQL',
    rate: 2,
  },
];

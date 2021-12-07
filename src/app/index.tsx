import React from 'react';

import NesContainer from '../components/NesContainer';
import NesText from '../components/NesText';

const App = () => (
  <NesContainer title="Stats">
    <NesText>Normal</NesText>
    <NesText variant="primary">Primary</NesText>
    <NesText variant="success">Success</NesText>
    <NesText variant="warning">Warning</NesText>
    <NesText variant="error">Error</NesText>
    <NesText variant="disabled">Disabled</NesText>
  </NesContainer>
);

export default App;

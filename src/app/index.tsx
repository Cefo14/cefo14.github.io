import React from 'react';

import Text from '../components/Text';

const App = () => (
  <div>
    <Text>Normal</Text>
    <Text variant="primary">Primary</Text>
    <Text variant="success">Success</Text>
    <Text variant="warning">Warning</Text>
    <Text variant="error">Error</Text>
    <Text variant="disabled">Disabled</Text>
  </div>
);

export default App;

export type DevIconName =
| 'github'
| 'javascript'
| 'typescript'
| 'angular'
| 'react'
| 'vue'
| 'nodejs'
| 'bash'
| 'docker'
| 'aws'
| 'linkedin'
| 'postgresql'
| 'mongodb'
| 'graphql';

interface DevIconPropTypes {
  icon: DevIconName;
  className?: string;
}

export default DevIconPropTypes;

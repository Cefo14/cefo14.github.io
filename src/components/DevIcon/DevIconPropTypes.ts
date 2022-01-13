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
| 'postgresql';

interface DevIconPropTypes {
  icon: DevIconName;
  className?: string;
}

export default DevIconPropTypes;

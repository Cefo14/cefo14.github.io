export type NesProgressVariant = 'primary' | 'success' | 'warning' | 'error' | 'pattern' | 'normal';
interface NesProgressPropTypes {
  value?: number;
  maxValue?: number;
  variant?: NesProgressVariant;
}

export default NesProgressPropTypes;

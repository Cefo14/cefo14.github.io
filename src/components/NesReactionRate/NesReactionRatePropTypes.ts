import {
  NesReactionIconType,
  NesReactionIconSize,
  NesReactionIconFillType,
} from '../NesReactionIcon/NesReactionIconPropTypes';

export type NesReactionRateType = Exclude<NesReactionIconType, 'like'>;
export type NesReactionRateSize = NesReactionIconSize;
export type NesReactionRateFillType = undefined | NesReactionIconFillType;

interface NesReactionRatePropTypes {
  rate?: number;
  maxRate?: number;
  type?: NesReactionRateType,
  size?: NesReactionRateSize;
  className?: string;
}

export default NesReactionRatePropTypes;

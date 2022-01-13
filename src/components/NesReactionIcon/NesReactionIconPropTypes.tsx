export type NesReactionIconType = (
  | 'heart'
  | 'star'
  | 'like'
);

export type NesReactionIconSize = (
  | 'is-small'
  | 'is-medium'
  | 'is-large'
);

export type NesReactionIconFillType = (
  | 'is-half'
  | 'is-transparent'
  | 'is-empty'
);

interface NesReactionIconPropTypes {
  type?: NesReactionIconType;
  size?: NesReactionIconSize;
  fillType?: NesReactionIconFillType;
  className?: string;
}

export default NesReactionIconPropTypes;

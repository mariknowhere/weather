export enum IIconNameEnum {
  Gift = 'gift',
  Moon = 'moon',
  Play = 'play',
  Tag = 'tag',
  Trash = 'trash',
  Unlock = 'unlock',
  User = 'user',
  Video = 'video',
  Volume = 'volume',
  Work = 'work',
}

export interface IIconProps {
  name?: IIconNameEnum;
  className?: string;
}

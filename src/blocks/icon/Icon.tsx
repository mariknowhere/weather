import { FC } from 'react';
import {IIconProps} from "./IconTypes";
import {useIconImport} from "./hooks/useIconImport";

const Icon: FC<IIconProps> = ({ name, className }) => {
  const IconComponent = useIconImport(name);

  return <IconComponent className={className} />;
};

export default Icon;

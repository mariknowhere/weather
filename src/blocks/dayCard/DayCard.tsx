import {FC} from 'react';
import {IDayCardProps} from "./DayCardTypes";
import Icon from "../icon/Icon";
import {IIconNameEnum} from "../icon/IconTypes";

const DayCard: FC<IDayCardProps> = ({ day, minimum, maximum }) => {
  return (
    <div className="flex-col bg-white p-4 rounded-xl w-40">
      <span className="text-center block">{day} Oct</span>
      <div className="flex-row mt-4">
        <div className="flex justify-center items-center">
          <span className="bg-teal-100 p-2 rounded-lg font-semibold">{minimum}</span>
          <span className="mx-2">—</span>
          <span className="bg-lime-100 p-2 rounded-lg font-semibold">{maximum}</span>
        </div>
      </div>
      <div className="flex justify-center">
        <Icon name={IIconNameEnum.Moon} className={'w-10 mt-4 fill-amber-500 stroke-gray-500'} />
      </div>
    </div>
  );
};

export default DayCard;

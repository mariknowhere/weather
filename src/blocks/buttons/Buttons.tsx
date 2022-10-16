import React, {FC} from 'react';
import {IButtonsProps} from "./ButtonsTypes";

const Buttons: FC<IButtonsProps> = ({ buttons, onButtonClick }) => {
  return (
    <section className="flex flex-col justify-center max-w-5xl mx-auto">
      <h3 className="flex justify-center text-lg font-light">You can change the city:</h3>
      <div className="flex mt-4 justify-center gap-4">
        {buttons.map(({ buttonText }) => (
          <button key={buttonText} onClick={event => onButtonClick(event)} className="flex flex-row rounded-2xl bg-white py-2 px-4">{buttonText}</button>
        ))}
      </div>
    </section>
  );
};

export default Buttons;

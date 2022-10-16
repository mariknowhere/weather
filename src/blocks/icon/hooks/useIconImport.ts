import Gift from "../assets/Gift";
import {IIconNameEnum} from "../IconTypes";
import Moon from "../assets/Moon";
import Play from "../assets/Play";
import Tag from "../assets/Tag";
import Trash from "../assets/Trash";
import User from "../assets/User";
import Unlock from "../assets/Unlock";
import Video from "../assets/Video";
import Volume from "../assets/Volume";
import Work from "../assets/Work";

export const useIconImport = (name: IIconNameEnum | undefined) => {
  // по свойству name берём нужный компонент (по умолчанию будет Gift)
  let IconComponent = Gift;

  switch (name) {
    case (IIconNameEnum.Moon): {
      IconComponent = Moon;
      break;
    }

    case (IIconNameEnum.Play): {
      IconComponent = Play;
      break;
    }

    case (IIconNameEnum.Tag): {
      IconComponent = Tag;
      break;
    }

    case (IIconNameEnum.Trash): {
      IconComponent = Trash;
      break;
    }

    case (IIconNameEnum.Unlock): {
      IconComponent = Unlock;
      break;
    }

    case (IIconNameEnum.User): {
      IconComponent = User;
      break;
    }

    case (IIconNameEnum.Video): {
      IconComponent = Video;
      break;
    }

    case (IIconNameEnum.Volume): {
      IconComponent = Volume;
      break;
    }

    case (IIconNameEnum.Work): {
      IconComponent = Work;
      break;
    }

    case (IIconNameEnum.Gift): {
      IconComponent = Gift;
      break;
    }
  }

  return IconComponent;
}

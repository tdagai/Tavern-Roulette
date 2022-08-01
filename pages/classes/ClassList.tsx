import ClassItem from "./ClassItem";
import DemonHunterIcon from '../../public/classIcons/demon_hunter_64.png';
import DruidIcon from '../../public/classIcons/druid_64.png';
import HunterIcon from '../../public/classIcons/hunter_64.png';
import MageIcon from '../../public/classIcons/mage_64.png';
import PaladinIcon from '../../public/classIcons/paladin_64.png';
import PriestIcon from '../../public/classIcons/priest_64.png';
import RogueIcon from '../../public/classIcons/rogue_64.png';
import ShamanIcon from '../../public/classIcons/shaman_64.png';
import WarlockIcon from '../../public/classIcons/warlock_64.png';
import WarriorIcon from '../../public/classIcons/warrior_64.png';
import NeutralIcon from '../../public/classIcons/neutral_48.png';

const ClassList = () => {

  const classData = [
    { title: 'Demon Hunter', imageSrc: DemonHunterIcon },
    { title: 'Druid', imageSrc: DruidIcon },
    { title: 'Hunter', imageSrc: HunterIcon },
    { title: 'Mage', imageSrc: MageIcon },
    { title: 'Paladin', imageSrc: PaladinIcon },
    { title: 'Priest', imageSrc: PriestIcon },
    { title: 'Rogue', imageSrc: RogueIcon },
    { title: 'Shaman', imageSrc: ShamanIcon },
    { title: 'Warlock', imageSrc: WarlockIcon },
    { title: 'Warrior', imageSrc: WarriorIcon },
    { title: 'Neutral', imageSrc: NeutralIcon },
  ];

  return (
    <>
      {classData.map(({ title, imageSrc }) =>
        <ClassItem key={title} title={title} imageSrc={imageSrc} />)}
    </>
  );

};


export default ClassList;
import Image from 'next/image';
import styled from 'styled-components';
import { useState } from 'react';

import classIcon from '../../public/classIcons/guldan_64.png';

//Requirements:
// class name
// class hero image
// clicking on image should turn draken/brighten the image

const ClassItem = () => {
  const [itemClicked, setItemClicked] = useState(false);

  return (
    <ClassItemWrapper title="Warlock" clicked={itemClicked}>
      <div>Warlock</div>
      <ClassImageWrapper onClick={() => setItemClicked(!itemClicked)}>
        <Image src={classIcon} alt='warlock' />
      </ClassImageWrapper>
    </ClassItemWrapper>
  )
}

const ClassItemWrapper = styled.div<{ clicked: Boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: brightness(${({ clicked }) => clicked ? '50%' : '100%'});
`;

const ClassImageWrapper = styled.div`
  &:hover {
  opacity: .5;
}
`;

export default ClassItem;
import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';
import { useState } from 'react';

type ClassItemProps = {
  title: string;
  imageSrc: StaticImageData;
};

const ClassItem = ({ title, imageSrc }: ClassItemProps) => {
  const [itemClicked, setItemClicked] = useState(false);

  return (
    <ClassItemWrapper title={title} clicked={itemClicked}>
      <ClassImageWrapper onClick={() => setItemClicked(!itemClicked)}>
        <Image src={imageSrc} alt={`${title}-class-image`} />
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
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
  opacity: ${({ clicked }) => clicked ? .25 : 1};
`;

const ClassImageWrapper = styled.div`
  &:hover {
  filter: brightness(50%);
}
`;

export default ClassItem;
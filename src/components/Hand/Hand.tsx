import { Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface HandProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  deg: number;
  currentHand: string;
}

function Hand({ top, left, right, bottom, deg, currentHand }: HandProps) {
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    switch (currentHand) {
      case 'idle':
        setCurrentImage('svg/male_idle.svg');
        break;
      case 'rock':
        setCurrentImage('svg/male_rock.svg');
        break;
      case 'paper':
        setCurrentImage('svg/male_paper.svg');
        break;
      case 'scissors':
        setCurrentImage('svg/male_scissors.svg');
        break;
      default:
        setCurrentImage('svg/male_idle.svg');
    }
  }, [currentHand]);

  return (
    <Image
      src={currentImage}
      position="absolute"
      top={top}
      bottom={bottom}
      left={left}
      right={right}
      transform={`rotate(${deg}deg)`}
    />
  );
}

Hand.defaultProps = {
  top: '',
  left: '',
  right: '',
  bottom: '',
};

export default Hand;

import React, { useState } from 'react';
import {
  AccordionItemWrapper,
  AccordionWrapper,
  BodyWrapper,
  TitleWrapper,
} from './styles/Styles';
import AccordionBody from './AccordionBody';

interface AccordionItemProps {
  title: string;
  content: string;
  index: number; // 각 아코디언의 인덱스 추가
  openIndex: number | null; // 열린 아코디언의 인덱스 추가
  onToggle: (index: number) => void; // 클릭 시 다른 아코디언 닫기 위한 콜백 함수 추가
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  index,
  openIndex,
  onToggle,
}) => {
  const isOpen = openIndex === index;

  return (
    <AccordionItemWrapper>
      <TitleWrapper
        style={{ cursor: 'pointer' }}
        onClick={() => onToggle(index)}
      >
        <strong>- {title} -</strong>
      </TitleWrapper>
      {isOpen && <AccordionBody />}
    </AccordionItemWrapper>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prevOpenIndex => (prevOpenIndex === index ? null : index));
  };

  return (
    <AccordionWrapper>
      <AccordionItem
        title="옥션"
        content="안녕하세요 옥션입니다."
        index={0}
        openIndex={openIndex}
        onToggle={handleToggle}
      />
      <AccordionItem
        title="G마켓"
        content="안녕하세요 G마켓입니다."
        index={1}
        openIndex={openIndex}
        onToggle={handleToggle}
      />
    </AccordionWrapper>
  );
};

export default Accordion;

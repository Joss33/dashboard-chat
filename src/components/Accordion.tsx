import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrid3, faChevronDown } from '@fortawesome/pro-solid-svg-icons';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">

      <a role='button' onClick={toggleAccordion} className="px-md py-sm inline-block w-full rounded-xs text-gray-blue-70 text-xs font-bold">
        <div className="flex items-center">
          <div className="w-7 h-7 text-base flex justify-center items-center mr-5">
            <FontAwesomeIcon icon={faGrid3} />
          </div>
          <span className='flex-grow'>{title}</span>
          <div className="w-5 h-5 text-base flex justify-center items-center">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </a>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default Accordion;
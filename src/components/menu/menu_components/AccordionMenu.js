import React from 'react';
import { nanoid } from 'nanoid';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'

import AccordionType from './AccordionType';

export default function AccordionMenu({ types }) {




    const accordionMenu =
        <Accordion defaultIndex={[]} allowMultiple>
            {types.map((type) => (
                <AccordionType
                    key={nanoid()}
                    type={type}
                />
            ))}
        </Accordion>

    return (
        <div className="accordion-menu">
            {accordionMenu}
        </div>
    );
}
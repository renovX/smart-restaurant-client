import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import { nanoid } from 'nanoid';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux';
import { addMenuItems } from '../../../features/menu/menuSlice';

const AccordionType = ({ type }) => {

    const menu = useSelector(state => state.menu.menu)
    const [currentlySelected, setCurrentlySelected] = React.useState('')
    const dispatch = useDispatch()

    const handleTypeClick = (type) => {
        if (!menu[type]) {
            setCurrentlySelected(type)
        }
    }

    useEffect(() => {
        currentlySelected && dispatch(addMenuItems(currentlySelected))
    }, [currentlySelected])

    return (
        <AccordionItem key={nanoid()} id={type} onClick={() => handleTypeClick(type)} >
            <h2>
                <Box margin={2}>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontSize={"larger"} fontWeight={"bold"}>
                            {type}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </Box>
            </h2>


            <AccordionPanel pb={4}>
                < Cards
                    type={type}
                />
            </AccordionPanel>
        </AccordionItem>
    )
}

export default AccordionType
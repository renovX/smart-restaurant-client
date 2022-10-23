import HeaderDiv from '../menu_components/HeaderDiv'
import AccordionMenu from '../menu_components/AccordionMenu';
import Footer from '../../landing/landing_components/Footer';
import "./Menu.css";
import { Button } from '@chakra-ui/react';
import { NavLink as Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchType, typeSelector } from '../../../features/types/typeSlice';
import { useEffect } from 'react';
import { Spinner } from '@chakra-ui/react'
export default function Menu() {

    const typeStatus = useSelector(state => state.types.status)
    const dispatch = useDispatch()


    useEffect(() => {
        typeStatus !== 'succeeded' && dispatch(fetchType())
    }, [])


    const types = useSelector(typeSelector)
    return (
        <div className='page-conatainer'>
            <div>
                <HeaderDiv />
                {
                    typeStatus === 'loading' ? <Spinner /> :
                        (
                            <>
                                <AccordionMenu types={types} />
                                <Link to="/cart">
                                    <Button flex="1" colorScheme='blue'>View Cart</Button>
                                </Link>
                            </>
                        )
                }
            </div>
            <Footer />
        </div>
    );
}
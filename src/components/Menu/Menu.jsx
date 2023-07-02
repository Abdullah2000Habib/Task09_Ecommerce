import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react';
import Select from '../Select/Select';
import { MenuButton, MenuContainer, MenuItems, MenuTitle, MenuWrapper } from './Style';
const Menu = ({title,type,items,isSeeAll,name,id}) => {
    return (
        <MenuWrapper>
            <MenuContainer>
                <MenuTitle>{title}</MenuTitle>
                <KeyboardArrowUpIcon className='arrowIcon'/>
            </MenuContainer>
            <MenuItems>
            {items.map((item,index)=>{
                return <Select key={index}  name={name} type={type} id={id+index} title={item}/>
            })}
            </MenuItems>
            {isSeeAll && <MenuButton>See All</MenuButton>}
        </MenuWrapper>
    );
}

export default Menu;

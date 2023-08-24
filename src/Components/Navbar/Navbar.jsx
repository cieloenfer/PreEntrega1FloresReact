import React, (useState) from 'react'
import { Menu ,MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import Navbar from "../Navbar/Navbar.jsx"

const Navbar = () => {
  const [] = useState(initialState);
  return (
    
    <div>
    <h3>Iuris Help</h3>
    <CartWidget/>
    <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Servicios Legales</MenuItem>
    <MenuItem>Mediacion</MenuItem>
    <MenuItem>Asesorias Copropiedad y convivencia</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
</div>
  )
}

export default Navbar



import { Sidebar as SideBarComponent, Menu, MenuItem } from 'react-pro-sidebar';

const Sidebar = () => {
  return (
    <>
      <SideBarComponent>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </SideBarComponent>
    </>
  );
};

export default Sidebar;

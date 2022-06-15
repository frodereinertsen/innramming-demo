import './Menu.css';
import { pages } from '../pages';
import { ListItem, UnorderedList } from '@fremtind/jkl-list-react';
import { Link } from 'react-router-dom';

const NavLink = ({ path, title }) => (
  <Link to={path} className="jkl-nav-link">
    {title}
  </Link>
);

export const Menu = () => {
  return (
    <UnorderedList className={'sidebar-menu'}>
      {pages.map(({ title, path }) => (
        <ListItem key={path}>
          <NavLink path={path} title={title} />
        </ListItem>
      ))}
    </UnorderedList>
  );
};

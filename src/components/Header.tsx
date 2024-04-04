import { Link, NavLink } from "react-router-dom";
const navigationItems = [
  {
    link: '/', 
    title: 'Home',
  },
  {
    link: '/films', 
    title: 'Films',
  },
  {
    link: '/new-releases', 
    title: 'New releases',
  },
  {
    link: '/favourites', 
    title: 'My favourites',
  },
]

const Header = () => {
  return (
    <header className="inset-x-0 top-0 w-full pt-5 absolute h-[55px] z-50">
      <div className="flex justify-between items-center container mx-auto px-10">
        <Link to='/'>
          <img src="/logo.png" alt="" />
        </Link>
        <nav className="flex gap-8 font-semibold text-lg">
          {navigationItems.map(navigationItem => (
            <NavLink 
              to={navigationItem.link} 
              className={({isActive}) => 
                isActive ? 'text-red-600' : 'hover:text-red-500 transition-colors'
              }
              key={navigationItem.link}
            >{navigationItem.title}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
export default Header;
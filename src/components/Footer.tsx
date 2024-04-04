import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="min-h-[150px] px-10 absolute bottom-0 w-full inset-x-0 flex flex-col justify-between py-5 bg-zinc-900">
      <div className="flex flex-row justify-between">
        <Link to='/'>
          <img src="/logo.png" alt="" />
        </Link>
        <h3 className="text-zinc-500">There could be your ad</h3>
      </div>
      <div className="text-center text-sm opacity-70">Copyright</div>
    </footer>
  )
}
export default Footer;

import { FC } from "react"

interface IProps {
  children: JSX.Element 
}

const Layout: FC<IProps> = ({children}) => {
  return (
    <main>
      { children }
    </main>
  )
}
export default Layout
import { FC } from "react"
import { Link } from "react-router-dom"

interface IProps {
  title: string,
  url: string,
  className?: string
}

const SectionTitleLink: FC<IProps> = ({title, url, className}) => {
  return (
    <h2>
      <Link to={url} className={`inline-flex gap-2 hover:gap-4 transition-all items-center font-bold ${className}`}>
        <span className="text-2xl leading-none mb-[2px]">{title}</span> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>  
      </Link>
    </h2>
  )
}
export default SectionTitleLink
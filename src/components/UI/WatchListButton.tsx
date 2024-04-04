import { MouseEventHandler } from "react";

interface IProps {
  onClick?: MouseEventHandler<HTMLButtonElement>,
  className?: string,
  isInWatchList: boolean
}

const WatchListButton = ({onClick, className, isInWatchList}: IProps) => {
  return (
    <button 
      onClick={onClick}
      className={`border border-slate-100 px-3 py-2 ${className && ' '}`}
    >
      {isInWatchList ? 
        <span className="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
          In Watchlist
        </span>
        :
        <span className="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add to Watchlist 
        </span>
      }
    </button>
  )
}

export default WatchListButton;

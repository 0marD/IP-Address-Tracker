import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

interface IPSearcherProps{
    onSubmit: (event: React.FormEvent) => void;
    ip: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const IPSearcher = ({onSubmit,ip,onChange}:IPSearcherProps):JSX.Element => {
  return (
    <form className="ip-searcher" onSubmit={onSubmit}>
          <input
            type="text"
            name="searcher"
            id="searcher"
            className="ip-searcher__input"
            placeholder="Search for any IP address or domain"
            value={ip}
            onChange={onChange}
          />
          <button type="submit" className="ip-searcher__button">
            <BiChevronRight className="ip-searcher__button-icon" />
          </button>
        </form>
  )
}

export default IPSearcher
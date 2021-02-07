import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import Item from '../molecule/Item';
import usePokemons from '../../hooks/usePokemons';
import './Listing.scss';
import debounce from '../../utils/debounce';

function Listing({ name }: any) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  
  const {filttered, count, loading} = usePokemons({ search, page });
  const handlePageChange = (event: any, value: number) => {
    setPage(value);
  };

  const handleSearchChange = debounce((event: any) => {
    setSearch(event.target.value);
  }, 200);

  return (
    <div className="listing">
      <div className="listing__search">
        <TextField className="listing__search-input" label="Quick Filter" onChange={handleSearchChange}/>
      </div>
      <div className="listing__pagination">
        <Pagination count={count} page={page} onChange={handlePageChange} variant="outlined" shape="rounded" size="large" color="primary"/>
      </div>
      <div className="listing__items">
        {filttered.map(({ name, id, types, sprites, stats}) => {
          return  <div key={id} className="listing__item">
                    <Item key={'item_'+id} name={name} types={types} sprites={sprites} stats={stats}/>
                  </div>
        })}
      </div>
      <div className="listing__pagination">
        <Pagination count={count} page={page} onChange={handlePageChange} variant="outlined" shape="rounded" size="large"/>
      </div>
      <Backdrop open={loading} style={{zIndex: 2000}}>
        <CircularProgress color="primary" />
      </Backdrop>
    </div>
  );
}

export default Listing;

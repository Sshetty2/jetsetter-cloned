import React, { Component } from 'react';
import NewItem from './NewItem';
import Items from './Items';
import Filter from './Filter';


import './Application.css';

import { inject, observer } from 'mobx-react';

const PackedItems = inject('itemList')(
  observer(({ itemList }) => (
    <Items
      title="Packed Items"
      items={itemList.filteredPackedItems}
    >
    <Filter searchTerm= {itemList.packedItemsFilter} onChange= {itemList.updatePackedItemsFilter} />
    </Items> 
  )
))

const UnPackedItems = inject('itemList')(
  observer(({ itemList }) => (
    <Items
      title="Unpacked Items"
      items={itemList.filteredUnpackedItems}
      >
     <Filter searchTerm= {itemList.unpackedItemsFilter} onChange= {itemList.updateUnpackedItemsFilter} />
    </Items>


  )
))


const MarkAllAsUnpacked = inject('itemList')(({ itemList }) => {
  return (
    <button className="full-width" onClick={itemList.markAllAsUnpacked}>
      Mark All as Packed
    </button> 
  )
})



class Application extends Component {

  render() {
    return (
      <div className="Application">
        <NewItem onSubmit={() => {}} />
        <UnPackedItems />
        <PackedItems />
        <button className="button full-width" onClick={() => {}}>
          Mark All As Unpacked
        </button>
      </div>
    );
  }
}

export default Application;

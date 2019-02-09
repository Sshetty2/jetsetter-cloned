import { observable, computed, action } from 'mobx';
import Item from './item';

export default class ItemStore {
    @observable items = [];
    @observable packedItemsFilter = '';
    @observable unpackedItemsFilter = '';


    @computed
    get packedItems() {
        return this.items.filter(item => item.packed );
    }

    @computed 
    get unpackedItems() {
        return this.items.filter(item => item.unpacked )
    }

    @computed 
    get filteredUnpackedItems() {
        return this.unpackedItems.filter(item => item.value.includes(this.unpackedItemsFilter));
      }
    
    @computed 
    get filteredPackedItems() {
    return this.packedItems.filter(item => item.value.includes(this.packedItemsFilter));
    }

    

    @action.bound 
    addItem(item) {
        this.items.push(new Item(item, this));
        
    }

    @action.bound 
    removeItem(item) {
        this.items = this.items.filter(i => i !== item);
    }


    @action.bound 
    updatePackedItemsFilter(value) {
    this.packedItemsFilter = value;
    }

    @action.bound 
    updateUnpackedItemsFilter(value) {
    this.unpackedItemsFilter = value;
    }

    @action.bound markAllAsUnpacked() {
        this.items.forEach(item => item.packed = false);
    }
 
}


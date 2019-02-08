import { observable, computed, action } from 'mobx';
import Item from '.Item';

export default class ItemList {
    @observable items = [];

    @computed get packedItems() {
        return this.items.filter(item => item.packed );
    }

    @computed get unPackedItems() {
        return this.items.filter(item => item.unpacked );
    }

    @action.bound addItem(item) {
        this.items.push(new Item(item), this);
        
    }

}
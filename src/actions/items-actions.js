import { ADD_NEW_ITEM, REMOVE_ITEM, TOGGLE_ITEM, MARK_ALL_AS_UNPACKED, UPDATE_ALL_ITEMS } from '../constants';
import API from '../lib/api';


export const getAllItems = () => {
  return dispatch => {
    API.getAll().then(items => {
      dispatch({
        type: UPDATE_ALL_ITEMS,
        items,
      })
    })
  }
}


export const addNewItem = (value) => {
  const item = {
    packed: false,
    value,
  }
  return dispatch => {
    API.add(item).then(item => {
      dispatch({
        type: ADD_NEW_ITEM,
        item
      })
    })
  }
}


export const toggleItem = (item) => {
  const updatedItem = { ...item, packed: !item.packed };
  return dispatch => {
    API.update(updatedItem).then(() => {
      dispatch({
        type: TOGGLE_ITEM,
        item: updatedItem
      });
    }
  )}  
};

export const removeItem = (id) => {
  console.log(id)
  return dispatch => {
    API.delete(id).then(()=>{
      dispatch(({
        type: REMOVE_ITEM,
        id
      }))
    })
  }
};

export const markAllAsUnpacked = () => {
  return dispatch => {
    API.markAllAsUnpacked().then(()=> {
      dispatch({
        type: MARK_ALL_AS_UNPACKED
      })
    })
  }
}

import { connect } from 'react-redux';
import { Items } from '../components/Items';

import { toggleItem, removeItem } from '../actions/items-actions'

const mapStateToProps = ({ items, filter }) => {
    return {
        items: items.filter(item => item.packed)
    };
};


const mapDispatchToProps= (dispatch) => ({
    onCheckOff(id){
        toggleItem(id);
    },
    onRemove(id){
        dispatch(removeItem(id));
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(Items);
import { connect } from 'react-redux';
import { Items } from '../components/Items';

import Filter from '../components/Filter';
import { updateUnpackedItemsFilter } from '../actions/filter-actions'

import { toggleItem, removeItem } from '../actions/items-actions'

const mapStateToProps = ({ state }) => {
    return {
        value: state.unpackedItemsFilter,
    };
};


const mapDispatchToProps= (dispatch) => ({
    updateFilter(value) {
        dispatch(updateUnpackedItemsFilter(value));
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(Items);
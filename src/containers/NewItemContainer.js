import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NewItem from '../component/NewItem';

import { updateNewItemValue } from '../actions/new-item-actions';
import { addNewItem } from '../actions/items-actions';

const mapStateToProps = ({ newItemValue }) => ({
    {
        value: state.unpackedItemsFilter,
    };
});


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateNewItemValue,
        addNewItem
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(NewItem)

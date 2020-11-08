import { connect } from 'react-redux';
import ProductDetail from './ProductDetail';

const mapStateToProps = (state) => {
    const detail = state.productDetail.data;
    return { detail };
};

export default connect(mapStateToProps)(ProductDetail);

import { connect } from 'react-redux';
import Content from './Content';
import { getProductDetail, getSimilarProducts } from './duck/actions';

const mapStateToProps = (state) => {
    const { isLoaded, isLoading } = state.productDetail;
    return { isLoaded, isLoading };
};

export default connect(mapStateToProps, { getProductDetail, getSimilarProducts })(Content);

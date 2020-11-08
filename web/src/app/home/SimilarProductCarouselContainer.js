import { connect } from 'react-redux';
import SimilarProductCarousel from './SimilarProductCarousel';

const mapStateToProps = (state) => {
    const products = state.productDetail.similarProducts;
    return { products };
};

export default connect(mapStateToProps)(SimilarProductCarousel);

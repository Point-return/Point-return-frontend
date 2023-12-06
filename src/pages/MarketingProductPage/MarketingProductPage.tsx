import React from 'react';
import './MarketingProductPage.scss';
import MarketingProductList from '@components/MarketingProductList/MarketingProductList.tsx';

function MarketingProductPage() {
  return (
    <div className="marketing-product">
      <MarketingProductList />
    </div>
  );
}

export default MarketingProductPage;

import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowProducts from './ContentRowProducts';
import ChartTenProds from './ChartTenProds';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 titulo-sidebar mb-0 text-gray-800">Saints of Bath | Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowProducts />
					<ContentRowCenter />
					<ChartTenProds />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;
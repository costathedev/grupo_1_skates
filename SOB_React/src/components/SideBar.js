import React from 'react';
import image from '../assets/images/Logo 1920.png';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import LastProductInDb from './LastProductInDb';
import ContentRowProducts from './ContentRowProducts';
import SearchProducts from './SearchProducts';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';
import ChartTenProds from './ChartTenProds';
import ChartAllProducts from './ChartAllProducts';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav fondo-verde bg-gradient-secondary  sidebar  accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="fondo-verde sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Saints of Bath"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="fondo-verde nav-item active">
                    <Link className="nav-link letra-sidebar" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Saints of Bath</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="borde-verde sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="fondo-verde sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="fondo-verde nav-item">
                <Link className="nav-link letra-sidebar" to="/ProductsInDb">
                        <i className="fas letra-sidebar fa-fw fa-folder"></i>
                        <span>Categorías</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="fondo-verde nav-item">
                    <Link className="nav-link letra-sidebar" to="/LastProductInDb">
                        <i className="fas letra-sidebar fa-fw fa-chart-area"></i>
                        <span>Último Producto</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="fondo-verde nav-item nav-link">
                <Link className="nav-link letra-sidebar" to="/ContentRowProducts">
                        <i className="fas letra-sidebar fa-fw fa-table"></i>
                        <span>Totales</span></Link>
                </li>
                
                {/* <!-- Últimos 10 Productos --> */}
                <li className="fondo-verde nav-item nav-link">
                    <Link className="nav-link letra-sidebar" to="/ChartTenProds">
                        <i className="fas letra-sidebar fa-search"></i>
                        <span>Últimos productos</span>
                    </Link>
                </li>

                {/* <!-- Todos los Productos --> */}
                <li className="fondo-verde nav-item nav-link">
                    <Link className="nav-link letra-sidebar" to="/ChartAllProducts">
                        <i className="fas letra-sidebar fa-search"></i>
                        <span>Todos los productos</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/*<!-- Microdesafio 1 -->*/}
            {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
            </Route>*/}
            {/*<!-- End Microdesafio 1 -->*/}

            {/*<!-- End Microdesafio 2 -->*/}
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/ProductsInDb">
                    <CategoriesInDb />
                </Route>
                <Route path="/LastProductInDb">
                    <LastProductInDb />
                </Route>
                <Route path="/ContentRowProducts">
                    <ContentRowProducts />
                </Route>
                <Route path="/SearchProducts">
                    <SearchProducts />
                </Route>
                <Route path="/ChartTenProds">
                    <ChartTenProds />
                </Route>
                <Route path="/ChartAllProducts">
                    <ChartAllProducts />
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;
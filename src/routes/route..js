import Station from '~/pages/Station/station';
import Booking from '~/pages/booking';
import Vehicle from '~/pages/Vehicle/vehicle';
import Customer from '~/pages/Customer/customer';
import Driver from '~/pages/Driver/driver';
import Group from '~/pages/group';
import Home from '~/pages/Home/home';
import Invoice from '~/pages/Route/invoice';
import SignIn from '~/pages/Login/login';
import Order from '~/pages/order';
import CreateStation from '~/pages/Station/create-station';
import CreateInvoice from '~/pages/Route/create-invoice';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: SignIn },
    { path: '/station', component: Station },
    { path: '/station/create', component: CreateStation },
    { path: '/station/update/:id', component: CreateStation },
    { path: '/orders', component: Order },
    { path: '/bookings', component: Booking },
    { path: '/drivers', component: Driver },
    { path: '/vehicles', component: Vehicle },
    { path: '/groups', component: Group },
    { path: '/customers', component: Customer },
    { path: '/invoices', component: Invoice },
    { path: '/invoice/create', component: CreateInvoice },
    { path: '/invoice/update/:id', component: CreateInvoice },
];

const privateRoutes = [];
export { privateRoutes, publicRoutes };

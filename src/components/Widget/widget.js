import styles from './Widget.module.scss';
import classNames from 'classnames/bind';

import {
    customer,
    driver,
    invoice,
    listCustomers,
    listDriver,
    order,
} from '~/data/data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowAltCircleUp,
    faCartShopping,
    faFileInvoice,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Widget({ type }) {
    const diff = 20;
    let data;
    switch (type) {
        case 'customer':
            data = {
                title: 'Customers',
                isMoney: false,
                link: 'See all Customers',
                icon: faUser,
                links: '/customers',
                amount: listCustomers.length,
            };
            break;
        case 'order':
            data = {
                title: 'Orders',
                isMoney: true,
                link: 'See all Orders',
                icon: faCartShopping,
                links: '/orders',
                amount: '100',
            };
            break;
        case 'invoice':
            data = {
                title: 'Invoice',
                isMoney: true,
                link: 'See all users',
                icon: faFileInvoice,
                links: '/invoices',
                amount: '100',
            };
            break;
        case 'driver':
            data = {
                title: 'Dirvers',
                isMoney: false,
                link: 'See all Dirver',
                icon: faUser,
                links: '/drivers',
                amount: listDriver.length,
            };
            break;
        default:
            break;
    }

    return (
        <div className={cx('widget')}>
            <div className={cx('left')}>
                <span className={cx('title')}>{data.title}</span>
                <span className={cx('counter')}>
                    {data.isMoney && '$'} {data.amount}
                </span>
                <span className={cx('link')}>
                    <a href={data.links}>{data.link}</a>
                </span>
            </div>
            <div className={cx('right')}>
                <div className={cx('percentage')}>
                    <FontAwesomeIcon icon={faArrowAltCircleUp} />
                    {diff}%
                </div>
                <FontAwesomeIcon className={cx('icon')} icon={data.icon} />
            </div>
        </div>
    );
}

export default Widget;

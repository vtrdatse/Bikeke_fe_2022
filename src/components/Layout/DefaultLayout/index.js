import Header from '~/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from './SideBar';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function DefaultLayout({ children, user }) {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />

            <div className={cx('container')}>
                <Header user={user} />

                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;

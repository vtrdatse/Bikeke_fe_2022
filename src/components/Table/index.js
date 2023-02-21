import classnames from 'classnames/bind';
import Button from '../Button';
import styles from './Table.module.scss';

const cx = classnames.bind(styles);

function Table(props) {
    const handleVisibleMap = (latitude, longtitude) => {
        props.visibleMap(latitude, longtitude);
    };
    const onUpdate = (id, page) => {
        if (page == 'station') {
            window.location.href = '/station/update/' + id;
        } else {
            window.location.href = '/invoice/update/' + id;
        }
    };
    const handleOnActive = (id) => {
        props.onActive(id);
    };
    const handleOnDeActive = (id) => {
        props.onDeActive(id);
    };
    console.log(props.data);
    const up =
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cG9seWdvbiBwb2ludHM9IjI1NS45ODksMTY5LjQ3OCAxNjUuNjg1LDMyMC4wMDYgMzQ2LjMxNSwzMjAuMDA2IAkJIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MjYuNjY3LDBIODUuMzMzQzM4LjI3MiwwLDAsMzguMjkzLDAsODUuMzMzdjM0MS4zMzNDMCw0NzMuNzI4LDM4LjI3Miw1MTIsODUuMzMzLDUxMmgzNDEuMzMzDQoJCQlDNDczLjcyOCw1MTIsNTEyLDQ3My43MjgsNTEyLDQyNi42NjdWODUuMzMzQzUxMiwzOC4yOTMsNDczLjcyOCwwLDQyNi42NjcsMHogTTQwMi41NiwzNTEuODUxDQoJCQljLTMuNzk3LDYuNjc3LTEwLjg4LDEwLjgxNi0xOC41NiwxMC44MTZIMTI4Yy03LjY4LDAtMTQuNzg0LTQuMTM5LTE4LjU2LTEwLjgxNmMtMy43OTctNi42NzctMy42OTEtMTQuODkxLDAuMjU2LTIxLjQ4Mw0KCQkJbDEyOC0yMTMuMzMzYzcuNzIzLTEyLjg2NCwyOC44ODUtMTIuODY0LDM2LjU4NywwbDEyOCwyMTMuMzMzQzQwNi4yNTEsMzM2Ljk2LDQwNi4zNTcsMzQ1LjE3Myw0MDIuNTYsMzUxLjg1MXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';
    const down =
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDI2LjY2NywwSDg1LjMzM0MzOC4yNzIsMCwwLDM4LjI5MywwLDg1LjMzM3YzNDEuMzMzQzAsNDczLjcyOCwzOC4yNzIsNTEyLDg1LjMzMyw1MTJoMzQxLjMzMw0KCQkJQzQ3My43MjgsNTEyLDUxMiw0NzMuNzI4LDUxMiw0MjYuNjY3Vjg1LjMzM0M1MTIsMzguMjkzLDQ3My43MjgsMCw0MjYuNjY3LDB6IE00MDIuMjgzLDE4MS42NTNsLTEyOCwyMTMuMzMzDQoJCQljLTMuODYxLDYuNDIxLTEwLjc5NSwxMC4zNDctMTguMjgzLDEwLjM0N2MtNy41MDksMC0xNC40NDMtMy45MjUtMTguMzA0LTEwLjM0N2wtMTI4LTIxMy4zMzMNCgkJCWMtMy45NDctNi41OTItNC4wNTMtMTQuODA1LTAuMjc3LTIxLjQ4M2MzLjc5Ny02LjY5OSwxMC44OC0xMC44MzcsMTguNTgxLTEwLjgzN2gyNTZjNy42OCwwLDE0Ljc2Myw0LjEzOSwxOC41NiwxMC44MzcNCgkJCUM0MDYuMzM2LDE2Ni44NDgsNDA2LjI1MSwxNzUuMDYxLDQwMi4yODMsMTgxLjY1M3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBvbHlnb24gcG9pbnRzPSIxNjUuNjg3LDE5Mi4wMTMgMjU1Ljk5MSwzNDIuNTQxIDM0Ni4yOTUsMTkyLjAxMyAJCSIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K';
    const formatDate = (date, format) => {
        const value = new Date(date);
        return (
            value.getDate() +
            '/' +
            (value.getMonth() + 1) +
            '/' +
            value.getFullYear()
        );
    };
    return (
        <>
            {props.listAll && (
                <div className={cx('table')}>
                    <table className={cx('listUser')}>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Full Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Create Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data &&
                                props.data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td>{item.gender}</td>
                                        <td>{formatDate(item.createdDate)}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            )}
            {props.customer && (
                <div className={cx('table')}>
                    <table className={cx('listUser')}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Full Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Image</th>
                                <th>Create Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data &&
                                props.data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.userId}</td>
                                        <td>{item.name}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td>{item.gender}</td>
                                        <td>
                                            <img
                                                src={item.img}
                                                className="avatar-img"
                                            />
                                        </td>
                                        <td>{formatDate(item.createdDate)}</td>
                                        <td>
                                            {item.status == 'ACTIVE' ? (
                                                <Button
                                                    primary
                                                    onClick={() =>
                                                        handleOnDeActive(
                                                            item.userId,
                                                        )
                                                    }
                                                >
                                                    {' '}
                                                    Disable
                                                </Button>
                                            ) : (
                                                <Button
                                                    green
                                                    onClick={() =>
                                                        handleOnActive(
                                                            item.userId,
                                                        )
                                                    }
                                                >
                                                    {' '}
                                                    Enable
                                                </Button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            )}
            {props.driver && (
                <div className={cx('table')}>
                    <table className={cx('listUser')}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Image</th>
                                <th>Gender</th>
                                <th>Create Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data &&
                                props.data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.userId}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <img
                                                src={item.img}
                                                className="avatar-img"
                                            />
                                        </td>
                                        <td>{item.gender}</td>
                                        <td>{formatDate(item.createdDate)}</td>
                                        <td>{item.status}</td>
                                        <td>
                                            {item.status == 'ACTIVE' ? (
                                                <Button
                                                    primary
                                                    onClick={() =>
                                                        handleOnDeActive(
                                                            item.userId,
                                                        )
                                                    }
                                                >
                                                    {' '}
                                                    Disable
                                                </Button>
                                            ) : (
                                                <Button
                                                    green
                                                    onClick={() =>
                                                        handleOnActive(
                                                            item.userId,
                                                        )
                                                    }
                                                >
                                                    {' '}
                                                    Enable
                                                </Button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            )}
            {props.station && (
                <div className={cx('table')}>
                    <table className={cx('listUser')} id={cx('listStation')}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Image</th>
                                <th>Latitude</th>
                                <th>Longtitude</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data &&
                                props.data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name} </td>
                                        <td>{item.address}</td>
                                        <td>
                                            <img
                                                src={item.img}
                                                className={cx('img-place')}
                                            />
                                        </td>
                                        <td>{item.latitude}</td>
                                        <td>{item.longtitude}</td>
                                        <td>{item.status}</td>
                                        <td>
                                            {item.latitude && item.longtitude && (
                                                <Button
                                                    outline
                                                    onClick={() =>
                                                        handleVisibleMap(
                                                            item.latitude,
                                                            item.longtitude,
                                                        )
                                                    }
                                                >
                                                    View Map
                                                </Button>
                                            )}
                                            {!item.latitude ||
                                                (!item.longtitude && (
                                                    <Button
                                                        outline
                                                        className="invisible"
                                                    >
                                                        View Map
                                                    </Button>
                                                ))}
                                            {item.status == 'ACTIVE' ? (
                                                <>
                                                    <Button
                                                        primary
                                                        onClick={() =>
                                                            handleOnDeActive(
                                                                item.id,
                                                            )
                                                        }
                                                    >
                                                        {' '}
                                                        Disable
                                                    </Button>
                                                    <Button
                                                        orange
                                                        onClick={() =>
                                                            onUpdate(
                                                                item.id,
                                                                'station',
                                                            )
                                                        }
                                                    >
                                                        {' '}
                                                        Edit
                                                    </Button>
                                                </>
                                            ) : (
                                                <Button
                                                    green
                                                    onClick={() =>
                                                        handleOnActive(item.id)
                                                    }
                                                >
                                                    {' '}
                                                    Enable
                                                </Button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            )}
            {props.route && (
                <div className={cx('table')}>
                    <table className={cx('listUser')}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Place From</th>
                                <th>Place To</th>
                                <th>Default Cost</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data &&
                                props.data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.placeFrom}</td>
                                        <td>{item.placeTo}</td>
                                        <td>{item.defaultCost}</td>
                                        <td>
                                            {item.status == 'ACTIVE' ? (
                                                <>
                                                    <Button
                                                        primary
                                                        onClick={() =>
                                                            handleOnDeActive(
                                                                item.id,
                                                            )
                                                        }
                                                    >
                                                        {' '}
                                                        Disable
                                                    </Button>
                                                    <Button
                                                        orange
                                                        onClick={() =>
                                                            onUpdate(
                                                                item.id,
                                                                'rpute',
                                                            )
                                                        }
                                                    >
                                                        {' '}
                                                        Edit
                                                    </Button>
                                                </>
                                            ) : (
                                                <Button
                                                    green
                                                    onClick={() =>
                                                        handleOnActive(item.id)
                                                    }
                                                >
                                                    {' '}
                                                    Enable
                                                </Button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            )}
            {props.vehicle && (
                <div className={cx('table')}>
                    <table className={cx('listUser')}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Vehicle brand</th>
                                <th>Vehicle Type</th>
                                <th>License Plate</th>
                                <th>Color</th>
                                <th>Image</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data &&
                                props.data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.bikeBrand.name}</td>
                                        <td>{item.vehicleType.name}</td>
                                        <td>{item.licensePlate}</td>
                                        <td>{item.color}</td>
                                        <td>
                                            <img
                                                src={item.img}
                                                className="vehicle-img"
                                            />
                                        </td>
                                        <td>{item.status}</td>
                                        <td>
                                            {item.status == 'ACTIVE' ? (
                                                <Button
                                                    primary
                                                    onClick={() =>
                                                        handleOnDeActive(
                                                            item.id,
                                                        )
                                                    }
                                                >
                                                    {' '}
                                                    Disable
                                                </Button>
                                            ) : (
                                                <Button
                                                    green
                                                    onClick={() =>
                                                        handleOnActive(item.id)
                                                    }
                                                >
                                                    {' '}
                                                    Enable
                                                </Button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

export default Table;

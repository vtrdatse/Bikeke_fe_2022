import React from 'react';
import Table from '~/components/Table';
import styles from './Station.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import IFrame from '../../components/Layout/components/Frame';
import { Col, Input, Row, FormGroup, Label, Button } from 'reactstrap';
import Paginate from '../paginate';
import { Navigate, useSearchParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import commonApi from '~/api/commonApi';

const cx = classNames.bind(styles);

function Station() {
    let page = 1;
    let refMap = React.useRef();
    const [loading, setLoading] = useState(false);
    const [listResult, setListResult] = useState([]);
    const [sortValue, setSortValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [pageNumber, setPageNumber] = useState(page);
    const [pageCount, setPageCount] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    const [iframe, setIframe] = useState('');
    const [navigate, setNavigate] = useState(false);

    const sortByList = [
        {
            name: 'Select…',
            value: '',
        },
        {
            name: 'Ascending by Id',
            value: 'id-asc',
        },
        {
            name: 'Descending by Id',
            value: 'id-desc',
        },
        {
            name: 'Ascending by Name',
            value: 'name-asc',
        },
        {
            name: 'Descending by Name',
            value: 'name-desc',
        },
    ];
    const setPage = (pageNumber) => {
        page = pageNumber;
    };
    const getListApi = () => {
        setLoading(true);
        (async () => {
            try {
                const params = {
                    sort: sortValue,
                    search: searchValue,
                    page: page,
                };
                const { data } = await commonApi.search(`station/all`, params);
                console.log('axiosdata: ' + JSON.stringify(data));
                if (data.stationList) {
                    setListResult(data.stationList);
                    setPageCount(data.totalPages);
                }
                setLoading(false);
            } catch (e) {
                console.error(e);
                // setNavigate(true);
            }
        })();
    };
    const onActive = (id) => {
        (async () => {
            try {
                const { data } = await commonApi.active(
                    `station/activate/${id}`,
                );
                if (data) {
                    alert('Successful enable!');
                    window.location.reload();
                } else {
                    alert('Unable to enable!');
                }
            } catch (e) {
                console.error(e);
                alert('Have an error!');
            }
        })();
    };
    const onDeActive = (id) => {
        (async () => {
            try {
                const { data } = await commonApi.deactive(
                    `station/deactivate/${id}`,
                );
                if (data) {
                    alert('Successful disable!');
                    window.location.reload();
                } else {
                    alert('Unable to disable!');
                }
            } catch (e) {
                console.error(e);
                alert('Have an error!');
            }
        })();
    };
    const onSearch = (text) => {
        setSearchValue(text);
        if (text != '') {
            getListApi();
        }
    };
    useEffect(() => {
        if (!localStorage.getItem('access_token')) {
            setNavigate(true);
        } else {
            setNavigate(false);
        }
        if (
            searchParams.get('page') &&
            searchParams.get('page') != pageNumber
        ) {
            setPage(searchParams.get('page'));
            setPageNumber(searchParams.get('page'));
        }
        if (searchParams.get('sort')) {
            if (searchParams.get('sort') != sortValue) {
                setSortValue(searchParams.get('sort'));
                getListApi();
            }
        }
        if (searchParams.get('s') != searchValue) {
            setSearchValue(searchParams.get('s'));
        }
        console.log('page: ' + page);
        getListApi();
        window.addEventListener('storage', () => {
            getListApi();
        });
    }, []);
    useEffect(() => {
        console.log('sortValue:' + sortValue);
        if (sortValue == '') {
            searchParams.delete('sort');
            setSearchParams(searchParams);
        } else {
            searchParams.set('sort', sortValue);
            setSearchParams(searchParams);
        }
        getListApi();
    }, [sortValue]);

    if (navigate) {
        return <Navigate to="/login" />;
    }
    function scrollTo(ref) {
        if (!ref.current) return;
        ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    const visibleMap = (latitude, longtitude) => {
        console.log('Location: ' + latitude + ' - ' + longtitude);
        const mapEmbedUrl =
            'https://maps.google.com/maps?q=' +
            latitude +
            ',' +
            longtitude +
            '&hl=es;z=14&amp;output=embed';
        setIframe('<iframe src="' + mapEmbedUrl + '"></iframe>');
        scrollTo(refMap);
    };

    return (
        <div>
            <div className="mt-5">
                <h1>Station</h1>
            </div>
            <a
                href="/station/create"
                className="btn btn-primary btn-lg float-end text-light mr-3 btn-create"
            >
                Create
            </a>
            <Row className="my-3 py-2 w-100">
                <Col className="col-md-3 col-xs-12">
                    <FormGroup>
                        <Label for="filter">Filter</Label>
                        <Input
                            id="filter"
                            name="select"
                            type="select"
                            onChange={(e) => setSortValue(e.target.value)}
                        >
                            {sortByList.map((item) => (
                                <option key={item.value} value={item.value}>
                                    {item.name}
                                </option>
                            ))}
                        </Input>
                    </FormGroup>
                </Col>
                <Col className="col-md-9 col-xs-12">
                    <FormGroup>
                        <Label for="search">Search</Label>
                        <Input
                            id="search"
                            placeholder="Enter text search ..."
                            onChange={(e) => onSearch(e.target.value)}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Table
                data={listResult}
                station
                visibleMap={visibleMap}
                onActive={onActive}
                onDeActive={onDeActive}
            ></Table>
            {listResult.length > 0 && (
                <Paginate
                    currentPage={pageNumber}
                    pagesCount={pageCount}
                    setPageNumber={setPageNumber}
                />
            )}
            {iframe && (
                <div className={cx('Container')} id="map-view" ref={refMap}>
                    <div className={cx('mapouter')}>
                        <div className={cx('gmap_canvas')}>
                            <IFrame iframe={iframe} />
                        </div>
                    </div>
                </div>
            )}
            {loading && (
                <ReactLoading
                    type="spokes"
                    className="loading"
                    color="rgb(44 137 176)"
                />
            )}
        </div>
    );
}

export default Station;

import { Link } from 'react-router-dom';
import Table from '~/components/Table';
import { useState, useEffect } from 'react';
import { Col, Input, Row, FormGroup, Label } from 'reactstrap';
import Paginate from '../paginate';
import { Navigate, useSearchParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import commonApi from '~/api/commonApi';

function Vehicle() {
    let page = 1;
    const [loading, setLoading] = useState(false);
    const [listResult, setListResult] = useState([]);
    const [sortValue, setSortValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    const [navigate, setNavigate] = useState(false);
    const sortByList = [
        {
            name: 'Select…',
            value: 'reset',
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
                const { data } = await commonApi.search(`bike/all`, params);
                console.log('axiosdata: ' + JSON.stringify(data));
                if (data.bikeList) {
                    setListResult(data.bikeList);
                }
                setPageCount(data.totalPages);
                setLoading(false);
            } catch (e) {
                console.error(e);
                setNavigate(true);
            }
        })();
    };
    const onActive = (id) => {
        (async () => {
            try {
                const { data } = await commonApi.active(`bike/activate/${id}`);
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
                    `bike/deactivate/${id}`,
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

    return (
        <div>
            <div className="mt-5">
                <h1>Vehicles</h1>
            </div>
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
                vehicle
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

export default Vehicle;

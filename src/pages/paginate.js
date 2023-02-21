import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { updateQueryStringParameter } from '~/api/helperApi';
import { useNavigate } from 'react-router-dom';

function Paginate(props) {
    console.log(props);
    const navigate = useNavigate();

    const handleClick = (e, page, event) => {
        console.log('click: ' + parseInt(page) + 'event: ' + event);
        e.preventDefault();
        let pageCurrrent = parseInt(page);
        switch (event) {
            case -1: {
                pageCurrrent = pageCurrrent - 1;
                break;
            }
            case 0: {
                break;
            }
            case 1: {
                pageCurrrent = pageCurrrent + 1;
                break;
            }
        }
        props.setPageNumber(pageCurrrent);
        window.location.href = updateQueryStringParameter(
            window.location.href,
            'page',
            pageCurrrent,
        );
    };
    return (
        <div>
            {props.pagesCount > 1 && (
                <div className="pagination-wrapper d-flex justify-content-center mt-5">
                    <Pagination aria-label="Page navigation" size="lg">
                        <PaginationItem disabled={props.currentPage <= 1}>
                            <PaginationLink
                                onClick={(e) =>
                                    handleClick(
                                        e,
                                        parseInt(props.currentPage),
                                        -1,
                                    )
                                }
                                previous
                                href="#"
                            />
                        </PaginationItem>

                        {[...Array(props.pagesCount)].map((page, i) => (
                            <PaginationItem
                                active={i + 1 === parseInt(props.currentPage)}
                                key={i}
                            >
                                <PaginationLink
                                    onClick={(e) => handleClick(e, i + 1, 0)}
                                    href="#"
                                >
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}

                        <PaginationItem
                            disabled={props.currentPage >= props.pagesCount}
                        >
                            <PaginationLink
                                onClick={(e) =>
                                    handleClick(e, props.currentPage, 1)
                                }
                                next
                                href="#"
                            />
                        </PaginationItem>
                    </Pagination>
                </div>
            )}
        </div>
    );
}

export default Paginate;

const replaceFilterParams = (params) => {
    let searchParams = {
        filter: [],
        perPage: params.perPage,
        page: params.page,
    };
    Object.entries(params.filter || {}).forEach(([key, value]) => {
        const filterKey = 'filter[' + key + ']';
        searchParams[[filterKey]] = value;
    });
    return searchParams;
};
export { replaceFilterParams };

const replaceSortParams = (params) => {
    let searchParams = {
        page: params.page,
        sort: params.sort,
        s: params.s,
    };
    console.log(searchParams);
    Object.entries(params).forEach(([key, value]) => {
        if (value != '' || value != undefined) {
            console.log(key);
            if (key == 'sort') {
                let sortValue = String(value);
                let sortArray = sortValue.split('-');
                if (sortArray.length > 0 && sortArray[1] != undefined) {
                    const sortQuery =
                        sortArray[0] == 'reset'
                            ? ''
                            : sortArray[0] + '(' + sortArray[1] + ')';
                    searchParams[[key]] = sortQuery;
                } else {
                    delete searchParams[[key]];
                }
            } else {
                searchParams[[key]] = value;
            }
        } else {
            delete searchParams[[key]];
        }
    });
    return searchParams;
};
export { replaceSortParams };

const updateQueryStringParameter = (uri, key, value) => {
    var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
    var separator = uri.indexOf('?') !== -1 ? '&' : '?';
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + '=' + value + '$2');
    } else {
        return uri + separator + key + '=' + value;
    }
};

export { updateQueryStringParameter };

const _parseJSON = (response) => {
    return response.text().then(function (text) {
        return text ? JSON.parse(text) : {};
    });
};
export { _parseJSON };

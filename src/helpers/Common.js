import moment from 'moment';

const formatJpMoney = (number) => {
    return new Intl.NumberFormat('ja-JP', { currency: 'JPY' }).format(number);
};

const appFormatDateHelper = (value, formatType) => {
    if (value != '' && value != null) {
        return moment(value).format(formatType);
    }
    return '';
};

const isJson = (value) => {
    try {
        JSON.parse(value);
    } catch (e) {
        return false;
    }
    return true;
};

const isControlForm = (e) => {
    const ejectClickArr = ['text', 'number', 'checkbox', 'select-one'];

    if (
        e &&
        !e.target.classList.contains('inputCol') &&
        ejectClickArr.indexOf(e.target?.type) < 0
    ) {
        return false;
    }

    return true;
};

export { formatJpMoney, appFormatDateHelper, isJson, isControlForm };

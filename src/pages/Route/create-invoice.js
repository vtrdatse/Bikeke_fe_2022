import { useState, useEffect } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Col,
    Input,
    FormText,
    Button,
} from 'reactstrap';
import { useParams, Navigate } from 'react-router-dom';
import Validator from '~/utils/validator';
import ReactLoading from 'react-loading';
import commonApi from '~/api/commonApi';

function CreateInvoice() {
    const [active, setActive] = useState('ACTIVE');
    const [route, setRoute] = useState({
        placeFrom: '',
        placeTo: '',
        defaultCost: '',
        status: '',
    });
    const [loading, setLoading] = useState(false);
    const [navigate, setNavigate] = useState(false);
    const params = useParams();

    const requiredWith = (value, field, state) => state[field] && value;
    const [errors, setErrors] = useState({});
    const rules = [
        {
            field: 'placeFrom',
            method: 'isEmpty',
            validWhen: true,
            message: 'The place from field is required.',
        },
        {
            field: 'placeTo',
            method: 'isEmpty',
            validWhen: true,
            message: 'The Place to field is required.',
        },
        {
            field: 'defaultCost',
            method: 'isEmpty',
            validWhen: true,
            message: 'The Default cost field is required.',
        },
        {
            field: 'status',
            method: 'isEmpty',
            validWhen: true,
            message: 'The status field is required.',
        },
    ];
    let validator = new Validator(rules);
    const getRoute = (id) => {
        setLoading(true);
        (async () => {
            try {
                const { data } = await commonApi.getById(`route/${id}`);
                console.log('axiosdata: ' + JSON.stringify(data));
                if (data) {
                    // Object.keys(data).forEach(function (key, index) {
                    //     data[key] = String(data[key]);
                    // });
                    setRoute(data);
                }
                setLoading(false);
            } catch (e) {
                console.error(e);
                setNavigate(true);
            }
        })();
    };
    useEffect(() => {
        if (params.id) {
            getRoute(params.id);
        }
    }, []);

    if (navigate) {
        return <Navigate to="/invoices" />;
    }

    const handleEdit = (e) => {
        setRoute({ ...route, [e.target.name]: e.target.value });
    };
    const handleChange = (event) => {
        setActive(event.target.checked ? 'ACTIVE' : 'INACTIVE');

        console.log(event.target);

        // 👇️ this is the checked value of the field
        console.log(event.target.checked);
    };

    const onSubmit = () => {
        delete route.ignore_whitespace;
        route.status = active;
        if (params.id) {
            (async () => {
                try {
                    const { data } = await commonApi.update(
                        'route/update',
                        route,
                    );
                    console.log('axiosdata: ' + JSON.stringify(data));
                    if (data) {
                        alert('Success!');
                        setErrors(validator.clear());
                        setErrors({});
                        window.location.href = '/invoices';
                    }
                    setLoading(false);
                } catch (e) {
                    console.error(e);
                    alert('Have an error!');
                    setNavigate(true);
                }
            })();
        } else {
            (async () => {
                try {
                    console.log('route: ' + JSON.stringify(route));
                    const { data } = await commonApi.create(
                        'route/create',
                        route,
                    );
                    console.log('axiosdata: ' + JSON.stringify(data));
                    if (data) {
                        alert('Success!');
                        window.location.href = '/invoices';
                    }
                    setLoading(false);
                } catch (e) {
                    console.error(e);
                    alert('Have an error!');
                    setNavigate(true);
                }
            })();
        }
    };
    return (
        <div>
            <div className="mt-5">
                <h1>Create Route</h1>
                <Form className="mt-5">
                    <FormGroup row>
                        <Label for="placeFrom" sm={2}>
                            Place from
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="placeFrom"
                                name="placeFrom"
                                placeholder="Enter place from"
                                value={route.placeFrom}
                                onChange={(e) => handleEdit(e)}
                                type="text"
                            />
                            {errors.placeFrom && (
                                <div
                                    className="validation"
                                    style={{ display: 'block' }}
                                >
                                    {errors.placeFrom}
                                </div>
                            )}
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mt-5">
                        <Label for="placeTo" sm={2}>
                            Place to
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="placeTo"
                                name="placeTo"
                                value={route.placeTo}
                                onChange={(e) => handleEdit(e)}
                                placeholder="Enter place to"
                            />
                            {errors.placeTo && (
                                <div
                                    className="validation"
                                    style={{ display: 'block' }}
                                >
                                    {errors.placeTo}
                                </div>
                            )}
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mt-5">
                        <Label for="defaultCost" sm={2}>
                            Default cost
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="defaultCost"
                                name="defaultCost"
                                value={route.defaultCost}
                                onChange={(e) => handleEdit(e)}
                                placeholder="Enter default cost"
                                type="text"
                            />
                            {errors.defaultCost && (
                                <div
                                    className="validation"
                                    style={{ display: 'block' }}
                                >
                                    {errors.defaultCost}
                                </div>
                            )}
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mt-5">
                        <Label for="active" sm={2}>
                            Active
                        </Label>
                        <Col
                            sm={{
                                size: 10,
                            }}
                        >
                            <FormGroup check>
                                <Input
                                    id="active"
                                    type="checkbox"
                                    onChange={handleChange}
                                    checked={active == 'ACTIVE' ? true : false}
                                />{' '}
                                <Label check>Active</Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                        <Col
                            sm={{
                                offset: 2,
                                size: 10,
                            }}
                        >
                            <Button
                                className="btn-create mt-3"
                                color="primary"
                                size="lg"
                                onClick={onSubmit}
                            >
                                Submit
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
                {loading && (
                    <ReactLoading
                        type="spokes"
                        className="loading"
                        color="rgb(44 137 176)"
                    />
                )}
            </div>
        </div>
    );
}

export default CreateInvoice;

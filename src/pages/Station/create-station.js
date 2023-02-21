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

function CreateStation() {
    const [active, setActive] = useState('ACTIVE');
    const [station, setStation] = useState({
        name: '',
        address: '',
        img: '',
        latitude: '',
        longtitude: '',
        status: '',
    });
    const [loading, setLoading] = useState(false);
    const [navigate, setNavigate] = useState(false);
    const params = useParams();

    const requiredWith = (value, field, state) => state[field] && value;
    const [errors, setErrors] = useState({});
    const rules = [
        {
            field: 'name',
            method: 'isEmpty',
            validWhen: true,
            message: 'The name field is required.',
        },
        {
            field: 'address',
            method: 'isEmpty',
            validWhen: true,
            message: 'The address field is required.',
        },
        {
            field: 'img',
            method: 'isEmpty',
            validWhen: true,
            message: 'The image field is required.',
        },
        {
            field: 'latitude',
            method: 'isEmpty',
            validWhen: true,
            message: 'The latitude field is required.',
        },
        {
            field: 'longtitude',
            method: requiredWith,
            args: ['latitude'],
            validWhen: true,
            message: 'The longtitude field is required..',
        },
        {
            field: 'status',
            method: 'isEmpty',
            validWhen: true,
            message: 'The status field is required.',
        },
    ];
    let validator = new Validator(rules);
    const getStation = (id) => {
        setLoading(true);
        (async () => {
            try {
                const { data } = await commonApi.getById(`station/${id}`);
                console.log('axiosdata: ' + JSON.stringify(data));
                if (data) {
                    // Object.keys(data).forEach(function (key, index) {
                    //     data[key] = String(data[key]);
                    // });
                    setStation(data);
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
            getStation(params.id);
        }
    }, []);

    if (navigate) {
        return <Navigate to="/station" />;
    }

    const handleEdit = (e) => {
        setStation({ ...station, [e.target.name]: e.target.value });
    };
    const handleChange = (event) => {
        setActive(event.target.checked ? 'ACTIVE' : 'INACTIVE');

        console.log(event.target);

        // 👇️ this is the checked value of the field
        console.log(event.target.checked);
    };

    const onSubmit = () => {
        delete station.ignore_whitespace;
        station.status = active;
        if (params.id) {
            (async () => {
                try {
                    const { data } = await commonApi.update(
                        'station/update',
                        station,
                    );
                    console.log('axiosdata: ' + JSON.stringify(data));
                    if (data) {
                        alert('Success!');
                        setErrors(validator.clear());
                        setErrors({});
                        window.location.href = '/station';
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
                    console.log('station: ' + JSON.stringify(station));
                    const { data } = await commonApi.create(
                        'station/create',
                        station,
                    );
                    console.log('axiosdata: ' + JSON.stringify(data));
                    if (data) {
                        alert('Success!');
                        window.location.href = '/station';
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
                <h1>Create Station</h1>
                <Form className="mt-5">
                    <FormGroup row>
                        <Label for="name" sm={2}>
                            Name
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Enter name"
                                value={station.name}
                                onChange={(e) => handleEdit(e)}
                                type="text"
                            />
                            {errors.name && (
                                <div
                                    className="validation"
                                    style={{ display: 'block' }}
                                >
                                    {errors.name}
                                </div>
                            )}
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mt-5">
                        <Label for="address" sm={2}>
                            Address
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="address"
                                name="address"
                                value={station.address}
                                onChange={(e) => handleEdit(e)}
                                placeholder="Enter address"
                                type="textarea"
                            />
                            {errors.address && (
                                <div
                                    className="validation"
                                    style={{ display: 'block' }}
                                >
                                    {errors.address}
                                </div>
                            )}
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mt-5">
                        <Label for="img" sm={2}>
                            Image
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="img"
                                name="img"
                                value={station.img}
                                onChange={(e) => handleEdit(e)}
                                placeholder="Enter image link"
                                type="text"
                            />
                            {errors.img && (
                                <div
                                    className="validation"
                                    style={{ display: 'block' }}
                                >
                                    {errors.img}
                                </div>
                            )}
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mt-5">
                        <Label for="latitude" sm={2}>
                            latitude
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="latitude"
                                name="latitude"
                                value={station.latitude}
                                onChange={(e) => handleEdit(e)}
                                placeholder="Enter latitude"
                                type="text"
                            />
                            {errors.latitude && (
                                <div
                                    className="validation"
                                    style={{ display: 'block' }}
                                >
                                    {errors.latitude}
                                </div>
                            )}
                        </Col>
                    </FormGroup>
                    <FormGroup row className="mt-5">
                        <Label for="longtitude" sm={2}>
                            Longtitude
                        </Label>
                        <Col sm={10}>
                            <Input
                                id="longtitude"
                                name="longtitude"
                                value={station.longtitude}
                                onChange={(e) => handleEdit(e)}
                                placeholder="Enter longtitude"
                                type="text"
                            />
                            {errors.longtitude && (
                                <div
                                    className="validation"
                                    style={{ display: 'block' }}
                                >
                                    {errors.longtitude}
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

export default CreateStation;

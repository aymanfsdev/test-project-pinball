import "../../../styles/components/Organisms/Sidebar.scss";

import React, { useState, useContext } from "react";

import UserContext from '../../../contexts/UserContext';
import Input from '../../Atoms/Form/InputNormal';
import toast from 'react-hot-toast';
import Button from '../../Molecules/Button/Button';

import { findPinBall } from '../../../store/findPinball.store';
import { queryClient } from '../../../plugins/react-query';

const defaultState: any = {
    lat: '',
    lng: '',
};

export default function Sidebar() {
    const [values, setvalues] = useState<any>({ ...defaultState });
    const { mutateAsync } = findPinBall.getByData();
    const { setUser } = useContext(UserContext);

    const handleChange = (e: any) => {
        setvalues({ ...values, [e.name]: e.value });
    };

    const handleSearch = async () => {
        const toastId = toast.loading('searching ....');
        mutateAsync(values, {
            async onSuccess(data: any) {
                toast.success('Location was found successfully', { id: toastId });
                queryClient.invalidateQueries(['productgroups']);
                setUser(data);
            },
            onError(error: any) {
                toast.error('error occurred please try again', {
                    id: toastId,
                });
            },
        });
    };

    const handleSubmit = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, geoError);
        } else {
            const toastId = toast.loading('searching ....');
            mutateAsync(values, {
                async onSuccess(data: any) {
                    toast.success('', { id: toastId });
                    queryClient.invalidateQueries(['productgroups']);
                    setUser(data);
                },
                onError(error: any) {
                    toast.error('error occurred please try again', {
                        id: toastId,
                    });
                },
            });
        }
    };

    const showPosition = (position: any) => {
        let postitionData = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        setvalues(postitionData)
        const toastId = toast.loading('searching ....');
        mutateAsync(postitionData, {
            async onSuccess(data: any) {
                toast.success('Search finished', { id: toastId });
                queryClient.invalidateQueries(['productgroups']);
                setUser(data);
            },
            onError(error: any) {
                toast.error('error occurred please try again', {
                    id: toastId,
                });
            },
        });
    }

    const geoError = () => {
        const toastId = toast.loading('searching ....');
        mutateAsync(values, {
            async onSuccess(data: any) {
                toast.success('', { id: toastId });
                queryClient.invalidateQueries(['productgroups']);
                setUser(data);
            },
            onError(error: any) {
                toast.error('error occurred please try again', {
                    id: toastId,
                });
            },
        });
    }

    return (
        <React.Fragment>
            <div className={"container bg-sidebar p-0"}>
                <div className="sidebar-header d-flex">
                    <img
                        src={"/assets/images/sass-logo-black.png"}
                        width={185}
                        alt="Logo"
                    />
                </div>
                <div className="sidebar-list-items border p-4">
                    <div className="col-12 col-md-12">
                        <Input
                            handleChange={handleChange}
                            name="lat"
                            value={values.lat}
                            placeholder="Lat"
                            className="bg-white"
                            type="number"
                        />
                    </div>
                    <div className="col-12 col-md-12">
                        <Input
                            handleChange={handleChange}
                            name="lng"
                            value={values.lng}
                            placeholder="Lng"
                            className="bg-white"
                            type="number"
                        />
                    </div>
                    <div className="body-modal-footer row px-2 my-4">
                        <div className="col-12">
                            <Button className="text-capitalize b-radius " onClick={() => handleSubmit()}>
                                <span>&nbsp;Near me</span>
                            </Button>
                        </div>
                        <br />
                        <div className="col-12">
                            <Button className="text-capitalize b-radius light" onClick={handleSearch}>
                                Search
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}

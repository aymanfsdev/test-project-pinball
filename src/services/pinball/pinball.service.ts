import { AxiosResponse } from 'axios';

import { customAxios } from '../../plugins/axios';

class PinBallService {
    public async getByData(data: any): Promise<AxiosResponse<any>> {
        return await customAxios.get(`/v1/regions/closest_by_lat_lon.json?lat=${data.lat}&lon=${data.lng}`);
    }

    public async getLocation(data: any): Promise<AxiosResponse<any>> {
        return await customAxios.get(`/v1/region/${data}/locations.json`);
    }
}

export const pinBallService = new PinBallService();

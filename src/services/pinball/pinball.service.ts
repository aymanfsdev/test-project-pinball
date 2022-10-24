import { AxiosResponse } from 'axios';

import { customAxios } from '../../plugins/axios';

class PinBallService {
    public async getByData(data: any): Promise<AxiosResponse<any>> {
        return await customAxios.get(`/v1/locations/closest_by_lat_lon.json?lat=${data.lat}&lon=${data.lng}&send_all_within_distance=true`);
    }
}

export const pinBallService = new PinBallService();

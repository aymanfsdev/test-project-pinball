import { useMutation, useQuery } from "react-query";

import { pinBallService } from '../services/pinball/pinball.service';

class FindPinBall {
    getByData() {
        return useMutation(pinBallService.getByData)
    }

    getLocation() {
        return useMutation(pinBallService.getLocation)
    }
}

export const findPinBall = new FindPinBall();

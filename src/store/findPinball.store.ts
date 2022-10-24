import { useMutation, useQuery } from "react-query";

import { pinBallService } from '../services/pinball/pinball.service';

class FindPinBall {
    getByData() {
        return useMutation(pinBallService.getByData)
    }
}

export const findPinBall = new FindPinBall();

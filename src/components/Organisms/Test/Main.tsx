import React, { FormEvent, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from '../../../contexts/UserContext';
import Details from "../../Molecules/custom/Details";
import Collapsible from '../../Molecules/Modal/Collapsible';

export default function SignInForm() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [location, setLocation] = useState<any>({});
  useEffect(() => {
    if (user) {
      setLocation(user.data);
    }

  }, [user]);

  let basicInfo: any = [];

  if (location?.locations) {
    location?.locations?.forEach((item: any) => {
      let objectData = {
        Name: item.name,
        Address: `${item.zip}, ${item.city}, ${item.country}`,
        Street: item.street,
        State: item.state,
        Phone: item.phone,
        Website: item.website,
        Latitude: item.lat,
        Longitude: item.lon,
      }
      basicInfo.push(objectData)
    })
  }

  return (
    <div>
      {
        location.errors ?
          <p>{location.errors}</p> :
          basicInfo && location.locations ?
            location.locations?.map((item: any, key: number) => (
              <div key={key} className="row">
                <Collapsible isOpen={key === 0 ? true : false} title={`${item.name} Information`}>
                  <div className="col-12 col-md-6">
                    <Details title={``} data={basicInfo[key]} />
                  </div>
                </Collapsible>
              </div>
            ))
            : null
      }
    </div>
  );
}

import React, {FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";

const UserInfo: FC = () => {
    const {user, loading, error} = useTypedSelector(state => state.user)
    return (
        <div>
            {user.address ?
                (<div>
                        {user.address.city ? <p>City: {user.address.city}</p> : null}
                        {user.address.street ? <p>Street: {user.address.street}</p> : null}
                        {user.address.suite ? <p>Suite: {user.address.suite}</p> : null}
                        {user.address.zipcode ? <p>Zipcode: {user.address.zipcode}</p> : null}

                        {user.address.geo ? (
                            user.address.geo.lat ? <p>Lat: {user.address.geo.lat}</p> : null
                        ) : null}
                        {user.address.geo ? (
                            user.address.geo.lng ? <p>Lng: {user.address.geo.lng}</p> : null
                        ) : null}
                    </div>
                ) :
                null
            }
        </div>
    );
};

export default UserInfo;
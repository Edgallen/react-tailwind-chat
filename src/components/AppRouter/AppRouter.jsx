import React, {useContext} from 'react';
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../../utility/routes/routes";
import {Context} from "../../index";
import { useAuthState } from 'react-firebase-hooks/auth';

const AppRouter = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

    return user ?
    (
        <Routes>
             {privateRoutes.map(({path, Page}) =>
                <Route path={path} key={path} element={<Page />} />
             )}
             <Route
                 path='*'
                 element={<Navigate to={'/chat'} replace={true} />}
            />
        </Routes>
    )
    :
    (
        <Routes>
            {publicRoutes.map(({path, Page}) =>
                <Route path={path} key={path} element={<Page />} />
            )}
            <Route
                path='*'
                element={<Navigate to={'/login'} replace={true} />}
            />
        </Routes>
    )
};

export default AppRouter;

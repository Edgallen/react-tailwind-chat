import React from 'react';
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../../utility/routes/routes";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';

const AppRouter = () => {
    const auth = getAuth();
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

import Landing from './pages/landing';
import Activities from './pages/activities';

const routes = {
    '/': () => <Landing />,
    '/about': () => <Activities />
}

export default routes;
import { Routes, Route } from 'react-router-dom';
import PodcastList from '../pages/PodcastList';
import PodcastDetail from '../pages/PodcastDetail';


const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={ <PodcastList /> } />
                <Route path='/podcast/:id/' element={ <PodcastDetail /> } />
            </Routes>
        </>
    );
};

export default AppRouter;

import { Routes, Route } from "react-router-dom";
import PodcastList from "../pages/PodcastList";
import PodcastDetail from "../pages/PodcastDetail";
import PodcastEpisode from "../pages/PodcastEpisode";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PodcastList />} />
        <Route path="/podcast/:id/" element={<PodcastDetail />} />
        <Route
          path="/podcast/:id/episode/:episodeId"
          element={<PodcastEpisode />}
        />
      </Routes>
    </>
  );
};

export default AppRouter;

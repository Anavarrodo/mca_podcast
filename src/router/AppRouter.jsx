import { Routes, Route } from "react-router-dom";
import PodcastList from "../pages/PodcastList";
import PodcastDetail from "../pages/PodcastDetail";
import PodcastEpisode from "../pages/PodcastEpisode";
import NotFound from "../pages/NotFound";

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
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;

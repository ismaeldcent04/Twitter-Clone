import React from "react";
import HomePage from "./Pages/HomePage";
import ExplorePage from "./Pages/ExplorePage";
import ProfilePage from "./Pages/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookmarksPage from "./Pages/BookmarksPage";
import NotificacionsPage from "./Pages/NotificacionsPage";
import ListPage from "./Pages/ListPage";
import MessagesPage from "./Pages/MessagesPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} exact></Route>
          <Route path="/explore" element={<ExplorePage />} exact></Route>
          <Route path="/profile" element={<ProfilePage />} exact></Route>
          <Route path="/bookmarks" element={<BookmarksPage />} exact></Route>
          <Route
            path="/notificacions"
            element={<NotificacionsPage />}
            exact
          ></Route>
          <Route path="/list" element={<ListPage />} exact></Route>
          <Route path="/messages" element={<MessagesPage />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

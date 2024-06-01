import React from "react";
import { createHashRouter } from "react-router-dom";

// pages
import Root from "./pages/Root/Root.tsx";
import DiscordBot from "./pages/groups/DiscordBot/DiscordBot.tsx";
import Project from "./pages/groups/Project/Project.tsx";
import Web from "./pages/groups/Web/Web.tsx";

export default function createIndexRouter() {
  return createHashRouter([
    { path: "/", element: <Root /> },
    { path: "/discord-bot", element: <DiscordBot /> },
    { path: "/project", element: <Project /> },
    { path: "/web", element: <Web /> },
  ]);
}

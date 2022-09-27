import React from "react";
import { useRouter } from "next/router";
import CardList from "components/ChatList";
import {
  Box,
} from "@mui/material";

const LanguageConfig = [
  { name: "javascript", key: "js", route: "/javascript" },
  { name: "typescript", key: "ts", route: "/typescript" },
  { name: "html", key: "html", route: "/html" },
  { name: "css", key: "css", route: "/css" },
  { name: "react", key: "react", route: "/react" },
];

export const LanguageSidebar = () => {
  const history = useRouter();
  const onCardClick = (route: string) => history.push(route);

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", p: 2 }}>
      {LanguageConfig.map((lang) => (
        <CardList name={lang.name} onClick={() => onCardClick(lang.route)} />
      ))}
    </Box>
  );
};

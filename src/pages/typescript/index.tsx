import { useEffect, useState } from "react";

import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  Grid,
  Paper,
  Box,
  TextField,
  Button,
  Avatar,
  Typography,
} from "@mui/material";
import Header from "components/Header";
import SendIcon from "@mui/icons-material/Send";
import firebaseDb from "../../../firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore/lite";
import MessageCard from "components/MessageCard";
import { Layout } from "components/Layout";

const Typescript: NextPage = () => {
  const [languages, setLanguages] = useState<any>(null);
  const getLanguages = async () => {
    const q = query(
      collection(firebaseDb, "tech-languages"),
      where("id", "==", "ts")
    );
    const langSnapshot = await getDocs(q);
    const langList = langSnapshot.docs.map((doc) => doc.data());
    setLanguages(langList?.[0] || null);
  };

  useEffect(() => {
    getLanguages();
  }, []);
  console.log(languages, "langa");
  if (!languages) return null;
  return (
    <div>
      <Head>
        <title>Javascript</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Grid sx={{ flexGrow: 1 }} display="flex">
        <Layout>
          <Box
            component="div"
            sx={{
              width: "100%",
              height: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                height: "80vh",
                maxWidth: "600px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
                backgroundColor: "#eee",
                overflowY: "scroll",
              }}
            >
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
              <MessageCard />
            </Paper>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                maxWidth: "500px",
                display: "flex",
                justifyContent: "center",
                width: "34%",
                margin: `0 auto`,
              }}
            >
              <TextField
                id="filled-basic"
                sx={{ width: "calc( 100% - 0px )", margin: 0 }}
                label="Filled"
                variant="filled"
              />
              <Button variant="contained" color="primary">
                <SendIcon />
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Avatar
              alt="Javascript"
              sx={{ height: 125, width: 125, mt: 4 }}
              src="/static/images/avatar/1.jpg"
            />
            <Typography variant="h1" mt={1}>
              {languages.name}
            </Typography>
            <Typography variant="overline" m={1}>
              {languages.version}
            </Typography>
            <Typography variant="overline" sx={{ m: 1, textAlign: "center" }}>
              {languages.description}
            </Typography>
          </Box>
          {/* <Box sx={{flex: 1, display: "flex",alignItems: "start",
            justifyContent: "center"}}>
        <Avatar alt="Javascript" sx={{height: 15, width: 15, mt: 2}} src="/static/images/avatar/1.jpg" />
        </Box> */}
        </Layout>
      </Grid>
    </div>
  );
};

export default Typescript;

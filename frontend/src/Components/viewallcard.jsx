import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { useSelector } from "react-redux";

function Viewallcard({ id, title, description, image, price }) {
  const darkmode = useSelector((state) => state.darkmode.darkmode);

  const handleDarkmode = () => {
    if (darkmode) {
      return "white";
    } else {
      return "black";
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 2,
        position: "relative",
        overflow: "hidden",
        borderRadius: "20px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
        webkitBackdropFilter: "blur(10px)",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        width="100"
        image={image}
        alt="images"
        sx={{ height: 200 }}
      />
      <CardContent
      sx={{
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rs.{price}
        </Typography>
      </CardContent>
      <CardActionArea>
        <Button
          sx={{
            width: "100%",
            backgroundColor: darkmode ? "#357a38" : "#6fbf73",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
            color: handleDarkmode(),
          }}
        >
          Add to cart
        </Button>

        <Button
          sx={{
            width: "100%",
            backgroundColor: darkmode ? "#1c54b2" : "#2196f3",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
            color: handleDarkmode(),
          }}
        >
          View
        </Button>
      </CardActionArea>
    </Card>
  );
}

export default Viewallcard;

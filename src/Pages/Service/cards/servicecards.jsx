import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export default function CustomCard({ imageSrc, title, description }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Card
      variant="outlined"
      sx={{
        width: 320,
        height: "300px",
        backgroundColor: "#FFF",
        overflow: "auto",
        borderRadius: "28px",
        borderTop: "7px solid #754ef9 ", 
        borderBottom: "7px solid #754ef9 ",// Border for the sides with 5px width
        borderLeft: "none", // Border for the left side with 2px width and grey color
        borderRight: "none",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease-in-out", // Add smooth transition for hover effect
        "&:hover": {
          transform: "scale(1.15)", 
          
        },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardContent>
        <div>
          <img
            src={imageSrc}
            style={{
              width: "40px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              color: "#754ef9",
              //background: "#754ef9",
            }}
          />
        </div>

        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
            fontWeight: "600",
            marginTop: "5px",
            color: isHovered ? "#754ef9" : "#333333",
            
          }}
        >
          {title}
        </Typography>
        <Typography
          level="body-sm"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
            overflow: "auto",
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

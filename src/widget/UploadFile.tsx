import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { BiCloud } from "react-icons/bi";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { useController, useFormContext } from "react-hook-form";
import { memo } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const UploadFile: React.FC<{ name: string }> = ({ name }) => {
  const { control, watch } = useFormContext();
  const { field } = useController({
    name,
    control,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const upload = (event: any) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();

    let url = "";

    reader.onloadend = () => {
      url = reader.result as string;
      field.onChange(url);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
      <ImageButton
        focusRipple
        style={{
          width: "100%",
        }}
      >
        <ImageSrc style={{ backgroundImage: `url(${watch(name)})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<BiCloud />}
          >
            Загрузить обложку
            <VisuallyHiddenInput type="file" onChange={upload} multiple />
          </Button>
        </Image>
      </ImageButton>
    </Box>
  );
};

export default memo(UploadFile);

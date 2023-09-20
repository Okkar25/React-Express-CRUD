import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Parent = (props: any) => {
  return (
    <Box>
      <h1>Parent</h1>
      {props.children}
    </Box>
  );
};

const Child = () => {
  return (
    <Parent>
      <Box>
        <Typography>Node 1</Typography>
        <Typography>Node 2</Typography>
        <Typography>Node 3</Typography>
        <Typography>Node 4</Typography>
        <Typography>Node 5</Typography>
      </Box>
    </Parent>
  );
};

export default Parent;

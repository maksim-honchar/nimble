import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

export const NotFound = (props) => {
  const back = () => props.setIsFind(true);
  return (
    <Paper className="wrapper-not_found" elevation={3}>
      <div className="title-not_found">
        <Typography gutterBottom>
          <strong>CONTENT NOT FOUND</strong>
        </Typography>
      </div>
      <div>
        <Button onClick={back} size="large" variant="outlined">
          Back
        </Button>
      </div>
    </Paper>
  );
};

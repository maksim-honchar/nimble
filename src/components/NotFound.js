import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

export const NotFound = (props) => {
  const mouseBack = () => props.setIsFind(true);

  // const reloadPage = () => window.location.reload(false);

  const buttonBack = (
    <div>
      <Button onClick={mouseBack} size="large" variant="outlined">
        Back
      </Button>
    </div>
  );

  const buttonReload = (
    <div>
      <Button
        onClick={() => window.location.reload(false)}
        size="large"
        variant="outlined"
      >
        Reload tracks
      </Button>
    </div>
  );

  return (
    <Paper className="wrapper-not_found" elevation={3}>
      <div className="title-not_found">
        <Typography gutterBottom>
          <strong>CONTENT NOT FOUND</strong>
        </Typography>
      </div>
      {props.songs.length ? buttonBack : buttonReload}
    </Paper>
  );
};

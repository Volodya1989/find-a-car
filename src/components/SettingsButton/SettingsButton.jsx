import Button from '@mui/material/Button';

const SettingsButton = ({ onSettingsClick }) => {
  return (
    <>
      <Button
        sx={{
          '&.MuiButton-root:hover': {
            background: `linear-gradient(
      to right top,
      #0dcbec,
      #00aefd,
      #008dff,
      #0063ff,
      #2612eb
    )`,
          },
          mt: 1,
          mr: 1,
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          background: `linear-gradient(to bottom right, #009ffd, #2a2a72)`,

          top: '0',
          left: '',
        }}
        style={{
          display: 'flex',
          marginLeft: 'auto',
          marginBottom: '40px',
          borderRadius: '50%',
          minWidth: '50px',
          minHeight: '50px',
          padding: '10px',
          '&:hover': {
            background: '#edeff0',
          },
        }}
        type="button"
        variant="contained"
        onClick={onSettingsClick}
      >
        <img
          src={require('../../icons/settings.png')}
          alt="reset button"
          width="40px"
          height="40px"
        />
      </Button>
    </>
  );
};
export default SettingsButton;

export const ProgressBar = (props) => {
    const { completed } = props;
  
    const containerStyles = {
      height: 7,
      width: '100%',
      backgroundColor: "#DDE2E5",
      borderRadius: 50,
      // margin: 50
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: '#7BC068',
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: '',
      color: '#12B28C',
      fontWeight: 'bold',
      display: 'none'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}`}</span>
        </div>
      </div>
    );
};
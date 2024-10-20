import PropTypes from 'prop-types';


const Button = ({BGColor , TextColor , icon , Text}) => {
  return (
    <button className={`flex justify-center items-center gap-2.5 rounded-[8px] lg:px-10 lg:py-[18.5px] px-8 py-[10px] font-inter ${BGColor ? `${BGColor} ${TextColor}` :''}`}>
        {Text}
        {icon && <img src={icon} alt="icon" />}
    </button>
  )
}

Button.propTypes = {
    BGColor: PropTypes.string.isRequired,
    TextColor: PropTypes.string.isRequired,
    icon: PropTypes.string,
    Text: PropTypes.string.isRequired,
};

Button.defaultProps = {
    icon: null,
};

export default Button
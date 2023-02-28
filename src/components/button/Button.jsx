import { StyledButton } from './styles';

const Button = ({ text, link }) => {
	return <StyledButton to={link}>{text}</StyledButton>;
};

export default Button;

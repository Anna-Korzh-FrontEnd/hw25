import PropTypes from "prop-types";

const Title = ({ name,  type="normal" }) => {

        return (
            <p  style={{fontWeight:type}}>
                 {name}
            </p>
        );
};
Title.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["normal","bold"])
}
export default Title;

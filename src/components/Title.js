const Title = ({ name,  type="normal" }) => {

        return (
            <p  style={{fontWeight:type}}>
                 {name}
            </p>
        );
};
export default Title;

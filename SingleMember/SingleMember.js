import "./SingleMember.css"

const SingleMember = (props) => {
    const { name } = props.member; return (
        <div className="single-items">
            <h3>{name}</h3>
        </div>

    );
};

export default SingleMember;
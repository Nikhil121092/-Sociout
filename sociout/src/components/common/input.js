

function Input(props) {
    return (
        <>
                    <div style={{fontWeight:"bold"}}>{props.name}</div>
                    <input placeholder={props.placeholder}/>
        </>
    );
}

export default Input;
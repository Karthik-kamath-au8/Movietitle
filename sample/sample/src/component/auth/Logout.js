import React from "react";
import { Link} from "react-router-dom";
import {signOut} from "../../redux/actions/authAction";
import {connect} from "react-redux";

const Logout = (props) => {
    console.log(props)
    return (
        <ul  className="right">
            <button><Link onClick={props.signOut} to="/signin">Log Out</Link></button>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut : () => dispatch(signOut())
    }
}
export default connect(null,mapDispatchToProps) (Logout);
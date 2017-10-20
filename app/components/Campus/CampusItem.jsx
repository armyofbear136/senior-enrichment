import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

/* -----------------    COMPONENT     ------------------ */


export default class CampusItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { campus } = this.props;
        return (
            <div className="col justify-content-md-center list-group-item min-content campus-item">
                <div className="media">
                    {/* <div className="media-left media-middle icon-container">
                        <img className="media-object img-circle" src={campus.photo} />
                    </div> */}
                    <NavLink
                        className="media-body"
                        activeClassName="active"
                        to={`/campus/${campus.id}`}>
                        <h4 className="media-heading tucked">
                            <span placeholder="Pony School">{campus.name}</span>
                        </h4>
                        <img className="img-rounded" width="200" src={campus.imageUrl} />
                    </NavLink>
                    {/* <div className="media-right media-middle">
                        {this.props.onecampus.isAdmin ?
                            <button
                                className="btn btn-default"
                                onClick={this.removeCampusCallback}>
                                <span className="glyphicon glyphicon-remove" />
                            </button> : null
                        }
                    </div> */}
                </div>
            </div>
        );
    }

}

/* -----------------    CONTAINER     ------------------ */

// const mapState = ({ campuses }) => ({ campuses });

// //const mapDispatch = { removeCampus, removeCampus };

// export default connect(mapState)(CampusItem);

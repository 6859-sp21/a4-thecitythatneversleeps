import React from "react";
import Modal from '@material-ui/core/Modal';

const hStyle = { color: '#ffdd99', height: '20px', padding:'20px' };

const mStyle = {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    "&:hover": {
        outline: "none"
      },
      "&:focus": {
        outline: "none"
    }
}

const body = (
    <div>
      <h2 id="simple-modal-title" color="#ffdd99">
            <div style={hStyle}>
                Data Loading ...
            </div>
      </h2>
    </div>
);

export default class LoadingModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                style={mStyle}
                open={this.props.show}
                // onClose={this.props.handleClose} // we close this automatically
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description">
                <div className="textspace">
                    {body}
                </div>
            </Modal>
        );

  }
}
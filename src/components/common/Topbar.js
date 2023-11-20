import React from 'react'
import PropTypes from 'prop-types'
import MenuIcon from '@mui/icons-material/Menu';

const Topbar = (props) => {

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                height: "64px",
                position: "fixed",
                top: 0,
            }}
        >
            <div
                typeof='button'
                onClick={() => { props.setStatus(!props.status) }}
                data-bs-toggle="collapse"
                data-bs-target="#sidebar"
                className='hamburger-menu '
            >
                <MenuIcon style={{ fontSize: '32px' }} />
            </div>
            <div
                style={{
                }}
            >
                <h2>This is Home</h2>
            </div>
        </div>
    )
}

Topbar.propTypes = {
    setStatus: PropTypes.any,
    status: PropTypes.any,
}

export default Topbar
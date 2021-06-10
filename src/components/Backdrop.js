import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    const backdropStyle = {width: '100vw', height: '100vh', position: 'fixed', top: '0', zIndex: '10', background: '#101010cc', display: "flex", justifyContent: "center"}

    return ReactDOM.createPortal(<div style={backdropStyle} onClick={props.onClick}>{props.children}</div>,document.getElementById('modal'))
}

export default Backdrop
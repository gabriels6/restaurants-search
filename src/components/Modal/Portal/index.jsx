import ReactDOM from 'react-dom';

//children - what you want to render in modal-root div

const PortalModal = ({ children }) => {
    const portal = document.getElementById('modal-root');
    return ReactDOM.createPortal(children,portal);
};

export default PortalModal;
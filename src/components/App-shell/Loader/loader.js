import { useSelector } from 'react-redux';


function Loader(params) {
    const showLoader = useSelector((state) => state.loader.isLoader);

    return (
        <div className={showLoader ? 'd-block' : 'd-none'}>
            <div className="container-fluid h-100 w-100 position-fixed top-0 start-0 p-0" style={{ zIndex: 5, backgroundColor: 'rgba(38, 48, 75, 0.37)' }}>
                <div className="row h-100  justify-content-center align-items-center p-0">
                    <div className="col-12 text-center">
                        <div className="spinner-border app-text-primary" role="status">
                        </div>
                        <p className="app-text-primary">Loading...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader
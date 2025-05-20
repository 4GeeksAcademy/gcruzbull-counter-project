export function Card(props){
    return (
        <div className="row">
            <div className="container col-6 m-auto mt-5">
                <div className="justify-content-center">
                    <h5 className="d-flex card-title justify-content-center mb-2">Simple Counter</h5>
                    <div className="card">
                        <div className="d-flex bg bg-dark card-body justify-content-between">
                            <div className="border border-white m-3 p-5 bg-secondary"></div>
                            <div className="border border-white m-3 p-5 bg-secondary"></div>
                            <div className="border border-white m-3 p-5 bg-secondary"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Card;
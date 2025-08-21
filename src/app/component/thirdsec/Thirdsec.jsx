import React from 'react'

const Thirdsec = () => {
    return (
        <>
            <div className="container">
                <div className="row align-items-center" style={{ minHeight: '400px' }}>

                    <div className="col-md-6 d-flex flex-column justify-content-center text-center">
                        <p className="h5 mb-3 mt-3">People Are Talking</p>
                        <p>“Love this shirt! Fits perfectly and the fabric is thick without being stiff.”</p>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga facere, quia unde minima, atque recusandae illo libero quibusdam eos odit quas omnis porro vero dolorum earum itaque, repellat praesentium ab.</p>
                    </div>


                    <div className="col-md-6 d-flex justify-content-center">
                        <img
                            src="/assets/images/image (2).png"
                            style={{ width: '50%', maxWidth: '300px' }}
                            alt="Review"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Thirdsec
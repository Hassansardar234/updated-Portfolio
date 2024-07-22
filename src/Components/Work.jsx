import React from 'react'
import work1 from '../Gallery/gallery1.png'
import work2 from '../Gallery/gallery2.png'
import work3 from '../Gallery/gallery3.png'
import work4 from '../Gallery/gallery4.png'
const Work = () => {
    return (
        <>
            <div className="work ">
                <div className="container ">
                    <h1>My Works</h1>
                    <div className="row">
                      
                        <div className="col-md-6">

                            <img src={work1}  alt="" />
                        </div>
                        <div className="col-md-6 ">
                            <img src={work2} alt="" />
                        </div>
                        <div className="col-md-6 mt-3">
                            <img src={work3} alt="" />
                        </div>
                        <div className="col-md-6 mt-3">
                            <img src={work4} alt="" />
                        </div>

                    </div>
                    <button className=" btn  px-5  mt-5 more rounded-5 fw-semibold "> More Work</button>
                </div>
            </div>
        </>
    )
}

export default Work
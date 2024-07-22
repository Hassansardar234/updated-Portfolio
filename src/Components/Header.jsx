import React from 'react'
import image from '../Gallery/hassan-01.png'

const Header = () => {
    return (
        <>
            <div className="main-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 right-header ">
                            <h1>I am  Hassan Sardar <br />I am MERN STACK Developer</h1>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className='text-white'>Make a Call</h4>
                                    <h4 className='text-white'>+92 14 6362403</h4>
                                </div>
                                <div className="col-md-6">
                                    <h4 className='text-white'>Drop a Message</h4>
                                    <h4  > <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className='text-white'>hassan.ispr001@gmail.com</a>  </h4>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-4 me-2">
                            <div className=" borderr-2  ">
                                <img src={image} className='hassan' height={360} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
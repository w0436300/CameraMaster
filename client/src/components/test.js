<div className="align-items-center">
            <div className="col-lg-8 col-md-8" style={{ margin: "auto", paddingTop: 30, paddingBottom: 50 }}>
                <h4 className="font-size38 sm-font-size32 xs-font-size30">Buckle Giarza</h4>
                <p className="no-margin-bottom">student?.notes</p>
                <div className="contact-info-section margin-40px-tb">
                    <ul className="list-style9 no-margin">
                        <li>
                            <div className="row">
                                <div className="col-md-5 col-5">
                                    <   strong className="margin-10px-left text-orange">Student Id:</strong>
                                </div>
                                <div className="col-md-7 col-7">
                                    <p>student?.student_id</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-md-5 col-5">
                                    <strong className="margin-10px-left text-yellow">Date of Birth.:</strong>
                                </div>
                                <div className="col-md-7 col-7">
                                    <p>new Date(student?.date_of_birth).toLocaleDateString()</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-md-5 col-5">
                                    <strong className="margin-10px-left text-lightred">Activities:</strong>
                                </div>
                                <div className="col-md-7 col-7">
                                    <p>student?.activities </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-md-5 col-5">
                                    <strong className="margin-10px-left text-green">Address:</strong>
                                </div>
                                <div className="col-md-7 col-7">
                                    <p> student?.address ? </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-md-5 col-5">
                                    <strong className="margin-10px-left xs-margin-four-left text-purple">Phone:</strong>
                                </div>
                                <div className="col-md-7 col-7">
                                    <p>student?.contact</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div className="col-md-5 col-5">
                                    <strong className="margin-10px-left xs-margin-four-left text-pink">Email:</strong>
                                </div>
                                <div className="col-md-7 col-7">
                                    <p>student?.contact?.email</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <h5 className="font-size24 sm-font-size22 xs-font-size20">Grades</h5>


                {
                    student?.grades ? (
                        <div className="sm-no-margin">
                            <div className="progress-text">
                                <div className="row">
                                    <div className="col-7">Math</div>
                                    <div className="col-5 text-right">student?.grades?.math</div>
                                </div>
                            </div>
                            <div className="custom-progress progress">
                                <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: `${student?.grades?.math}%` }} className="animated custom-bar progress-bar slideInLeft bg-sky"></div>
                            </div>
                            <div className="progress-text">
                                <div className="row">
                                    <div className="col-7">English</div>
                                    <div className="col-5 text-right">{student?.grades?.english}%</div>
                                </div>
                            </div>
                            <div className="custom-progress progress">
                                <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: `${student?.grades?.english}%` }} className="animated custom-bar progress-bar slideInLeft bg-orange"></div>
                            </div>
                            <div className="progress-text">
                                <div className="row">
                                    <div className="col-7">Science</div>
                                    <div className="col-5 text-right">{student?.grades?.science}%</div>
                                </div>
                            </div>
                            <div className="custom-progress progress">
                                <div role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: `${student?.grades?.science}%` }} className="animated custom-bar progress-bar slideInLeft bg-green"></div>
                            </div>
                        </div>


                    ) : (
                        <p>No Grades Available</p>
                    )
                }


            </div>
        </div>
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Card } from "react-bootstrap"

const TherapistProfileComponent = () => {
    const imgAddr = "data:image/jpeg;base64,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"
    return (
        <Card>
            <Card.Body>
                <Card.Title className="m-3">Gender-Based Violence Therapists</Card.Title>
            </Card.Body>
            <div className="d-sm-flex">
                <Card className="m-3 shadow-sm">
                    <Card.Body>
                        <div className="d-flex justify-content-center">
                            <img className="rounded-5 text-center" src={imgAddr} alt="doctor"/>
                        </div>
                        <Card.Title>Dr. Samson Kimani</Card.Title>
                        <hr/>
                        <Card.Text>
                            Dr. Samson Kimathi is a compassionate and experienced therapist specializing in mental health care. With a background in psychology and counseling, he provides personalized therapy for individuals struggling with stress, anxiety, depression, and trauma. Dr. Kimathi is dedicated to helping clients achieve emotional well-being through evidence-based approaches and a supportive environment. His expertise in cognitive-behavioral therapy (CBT) and mindfulness techniques enables him to guide patients toward healing and personal growth.
                        </Card.Text>
                        <Card.Footer>
                            <Button variant="primary" className="d-flex align-items-center m-2">
                                <FontAwesomeIcon className="m-1" icon={faCalendarCheck}/>
                                Book Appointment
                            </Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
                <Card className="m-3 shadow-sm">
                    <Card.Body>
                        <div className="d-flex justify-content-center">
                            <img className="rounded-5 text-center" src={imgAddr} alt="doctor"/>
                        </div>
                        <Card.Title>Dr. Samson Kimani</Card.Title>
                        <hr/>
                        <Card.Text>
                            Dr. Samson Kimathi is a compassionate and experienced therapist specializing in mental health care. With a background in psychology and counseling, he provides personalized therapy for individuals struggling with stress, anxiety, depression, and trauma. Dr. Kimathi is dedicated to helping clients achieve emotional well-being through evidence-based approaches and a supportive environment. His expertise in cognitive-behavioral therapy (CBT) and mindfulness techniques enables him to guide patients toward healing and personal growth.
                        </Card.Text>
                        <Card.Footer>
                            <Button variant="primary" className="d-flex align-items-center m-2">
                                <FontAwesomeIcon className="m-1" icon={faCalendarCheck}/>
                                Book Appointment
                            </Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
                <Card className="m-3 shadow-sm">
                    <Card.Body>
                        <div className="d-flex justify-content-center">
                            <img className="rounded-5 text-center" src={imgAddr} alt="doctor"/>
                        </div>
                        <Card.Title>Dr. Samson Kimani</Card.Title>
                        <hr/>
                        <Card.Text>
                            Dr. Samson Kimathi is a compassionate and experienced therapist specializing in mental health care. With a background in psychology and counseling, he provides personalized therapy for individuals struggling with stress, anxiety, depression, and trauma. Dr. Kimathi is dedicated to helping clients achieve emotional well-being through evidence-based approaches and a supportive environment. His expertise in cognitive-behavioral therapy (CBT) and mindfulness techniques enables him to guide patients toward healing and personal growth.
                        </Card.Text>
                        <Card.Footer>
                            <Button variant="primary" className="d-flex align-items-center m-2">
                                <FontAwesomeIcon className="m-1" icon={faCalendarCheck}/>
                                Book Appointment
                            </Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
                <Card className="m-3 shadow-sm">
                    <Card.Body>
                        <div className="d-flex justify-content-center">
                            <img className="rounded-5 text-center" src={imgAddr} alt="doctor"/>
                        </div>
                        <Card.Title>Dr. Samson Kimani</Card.Title>
                        <hr/>
                        <Card.Text>
                            Dr. Samson Kimathi is a compassionate and experienced therapist specializing in mental health care. With a background in psychology and counseling, he provides personalized therapy for individuals struggling with stress, anxiety, depression, and trauma. Dr. Kimathi is dedicated to helping clients achieve emotional well-being through evidence-based approaches and a supportive environment. His expertise in cognitive-behavioral therapy (CBT) and mindfulness techniques enables him to guide patients toward healing and personal growth.
                        </Card.Text>
                        <Card.Footer>
                            <Button variant="primary" className="d-flex align-items-center m-2">
                                <FontAwesomeIcon className="m-1" icon={faCalendarCheck}/>
                                Book Appointment
                            </Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </div>
           
        </Card>
    )
}

export default TherapistProfileComponent
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import 'bootswatch/dist/lux/bootstrap.min.css';
import Slider from './Slider'
import Card from './Card';
import loadingGif from './loading.gif';
function Form() {
    useEffect(() => {
        if (window.localStorage.getItem('no')) {
            setTeacherno(window.localStorage.getItem('no'));
            setCurrentTeacher(teacher[window.localStorage.getItem('no')]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let teacher = [{
        name: 'Dr.Madhuri Animesh Tayal',
        subject: 'Software Engineering',
        id: '604f5c827d64870f00c187d5'
    }, {
        name: 'Dr.Dattatraya Sakharam Adane',
        subject: 'Design and Analysis of Algorithms',
        id: '6050ba0c14276005e8b0fa61'
    }, {
        name: 'Dr.Padma Dattatraya Adane',
        subject: 'Discrete Mathematics',
        id: '604f5bbf7d64870f00c187d2'
    }, {
        name: 'Mrs.Pratibha Vivek Kokardekar',
        subject: 'Computer Organization and Architecture',
        id: '604f5c047d64870f00c187d3'
    }];
    let [teacherno, setTeacherno] = useState(0);
    const [currentTeacher, setCurrentTeacher] = useState(teacher[0]);
    const [error, setError] = useState(null);
    const [submit, setSubmit] = useState(true);
    let sendData = async () => {
        setSubmit(false);
        const scores = [];
        const baseUrl = `http://localhost:8080/feedback/`;
        document.querySelectorAll('input').forEach(ele => scores.push(ele.value));
        let body = {
            "name": currentTeacher.name,
            "subject": currentTeacher.subject,
            "Competency": scores[0],
            "Teaching Skills": scores[1],
            "Punctuality": scores[2],
            "Practical Knowledge": scores[3],
            "Approachability": scores[4],
            "Class Control": scores[5]
        };
        const rawData = await fetch(`${baseUrl}/${currentTeacher.id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (!rawData.ok)
            setError(rawData.message);
        else {
            await rawData.json();
            setTeacherno(++teacherno);
            setCurrentTeacher(teacher[teacherno]);
            window.localStorage.setItem('no', teacherno);
        }
        setTimeout(() => { setSubmit(true) }, 2000);
    };
    return (
        <div className="container">

            {
                error &&
                <div className="errorMessage mt-3">
                    <div className="alert alert-dismissible alert-danger">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
                    </div>
                </div>
            }
            {
                submit && teacherno < 4 &&
                <div>
                    <Card name={currentTeacher.name} subject={currentTeacher.subject} />
                    <Slider header='Competency' />
                    <Slider header='Teaching Skills' />
                    <Slider header='Punctuality' />
                    <Slider header='Practical Knowledge' />
                    <Slider header='Approachability' />
                    <Slider header='Class Control' />
                    <button type="button" class="btn btn-primary" onClick={sendData}>Submit and Next</button>
                </div>
            }
            {
                !submit && teacherno < 4 &&
                <img src={loadingGif} alt="" />
            }
            {
                teacherno >= 4 &&
                <div>
                    <div className="card text-white bg-primary mb-3 mt-2">
                        <div className="card-body">
                            <h4 className="card-title">Thank you for submitting your feedback</h4>
                            <p className="card-text"><a href="/results" className="text-white"> Check Result</a></p>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default Form

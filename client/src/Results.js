import React from 'react';
import { useEffect, useState } from 'react';
import './Results.css';
import loadingGif from './loading.gif';
function Results() {
  const getData = async () => {
    const baseUrl = `http://localhost:8080/feedback/`;
    const rawData = await fetch(baseUrl);
    if (!rawData.ok)
      return setError(rawData.message);
    const data = await rawData.json();
    console.log(data);
    setLoading(false);
    for (let i = 0; i < data.length; i += 2) {
      let card1 = '';
      let card2 = '';
      if (data[i]) {
        card1 = `<ul class="list-group mt-4">
            <li class="list-group-item d-flex justify-content-between align-items-center active">
                ${data[i].name}
              <span class="badge badge-primary badge-pill">${((data[i]['Competency'] + data[i]['Teaching Skills'] + data[i]['Punctuality'] + data[i]['Practical Knowledge'] + data[i]['Approachability'] + data[i]['Class Control']) / (data[i]['count'] * 6)).toFixed(2)}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
            Competency
              <span class="badge badge-primary badge-pill">${(data[i]['Competency'] / data[i]['count']).toFixed(2)}/10</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
            Teaching Skills
              <span class="badge badge-primary badge-pill">${(data[i]['Teaching Skills'] / data[i]['count']).toFixed(2)}/10</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
            Punctuality
              <span class="badge badge-primary badge-pill">${(data[i]['Punctuality'] / data[i]['count']).toFixed(2)}/10</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
            Practical Knowledge
              <span class="badge badge-primary badge-pill">${(data[i]['Practical Knowledge'] / data[i]['count']).toFixed(2)}/10</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
            Approachability
              <span class="badge badge-primary badge-pill">${(data[i]['Approachability'] / data[i]['count']).toFixed(2)}/10</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
            Class Control
              <span class="badge badge-primary badge-pill">${(data[i]['Class Control'] / data[i]['count']).toFixed(2)}/10</span>
            </li>
          </ul>`;
      }
      if (data[i + 1]) {
        card2 = `<ul class="list-group mt-4">
                <li class="list-group-item d-flex justify-content-between align-items-center active">
                    ${data[i + 1].name}
                  <span class="badge badge-primary badge-pill">${((data[i + 1]['Competency'] + data[i + 1]['Teaching Skills'] + data[i + 1]['Punctuality'] + data[i + 1]['Practical Knowledge'] + data[i + 1]['Approachability'] + data[i + 1]['Class Control']) / (data[i + 1]['count'] * 6)).toFixed(2)}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                Competency
                  <span class="badge badge-primary badge-pill">${(data[i + 1]['Competency'] / data[i + 1]['count']).toFixed(2)}/10</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                Teaching Skills
                  <span class="badge badge-primary badge-pill">${(data[i + 1]['Teaching Skills'] / data[i + 1]['count']).toFixed(2)}/10</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                Punctuality
                  <span class="badge badge-primary badge-pill">${(data[i + 1]['Punctuality'] / data[i + 1]['count']).toFixed(2)}/10</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                Practical Knowledge
                  <span class="badge badge-primary badge-pill">${(data[i + 1]['Practical Knowledge'] / data[i + 1]['count']).toFixed(2)}/10</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                Approachability
                  <span class="badge badge-primary badge-pill">${(data[i + 1]['Approachability'] / data[i + 1]['count']).toFixed(2)}/10</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                Class Control
                  <span class="badge badge-primary badge-pill">${(data[i + 1]['Class Control'] / data[i + 1]['count']).toFixed(2)}/10</span>
                </li>
              </ul>`;
      }
      let resultsEle = document.querySelector('.results');
      resultsEle.innerHTML += `
            <div class="row align-items-start">
            <div class="col">${card1}</div>
            <div class="col">${card2}</div>
            </div>
            `
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  return (

    <div className="container">
      {
        !loading && !error &&
        <div className="results">

        </div>
      }
      {
        !loading && error &&
        <div className="errorMessage mt-3">
          <div className="alert alert-dismissible alert-danger">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <strong>Oh snap!</strong> <a href="/results" class="alert-link">Change a few things up</a> and try submitting again.
                    </div>
        </div>
      }
      {
        loading && <img src={loadingGif} alt="laoding-img" />
      }

    </div>
  )
}

export default Results;

import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {

    const [topicData, setTopicData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/topics/get-all-topics');
                setTopicData(response.data);
            } catch (error) {
                console.error('Fetch data gagal, error: ', error)
            }
        }
        fetchData();
    }, []) // Remove topicData from the dependency array

    return (
        <div className='content-home'>
            <h5>List of Topic</h5>
            <ul>
                {topicData.map((topic) => (
                    <li key={topic.idTopic}>
                    <h5>{topic.idTopic}</h5>
                    <p>{topic.nameTopic}</p>
                    <p>{topic.descTopic}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home

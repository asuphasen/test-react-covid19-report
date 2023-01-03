import React, { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import CardComponent from "./CardComponent";
import '../App.css';
import axios from 'axios';

const APIUrl = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces";

const C19ProvincePage = () => {
    const [datas, setDatas] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    function getData() {
        axios.get(APIUrl).then((res) => {
            setDatas(res.data)
        })
    }

    useEffect(() => {
        getData();
    }, [])

    console.log('data ', datas)

    if (datas.length === 0) { return null }

    return (
        <>
            <div className="search-box">
                <SearchBar data={datas} setFilteredData={setFilteredData} />
            </div>
            <div className="container">
                {filteredData.map((element, i) => {
                    return <CardComponent key={i}
                        province={element.province}
                        new_case={element.new_case}
                        total_case={element.total_case}
                        new_case_excludeabroad={element.new_case_excludeabroad}
                        total_case_excludeabroad={element.total_case_excludeabroad}
                        new_death={element.new_death}
                        total_death={element.total_death}
                        update_date={element.update_date}
                    />
                })
                }
            </div>

        </>
    )
}

export default C19ProvincePage;
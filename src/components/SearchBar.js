import { Input } from "antd";
import { useState, useEffect } from "react";

const { Search } = Input;

const SearchBar = (props) => {
    const { data, setFilteredData } = props;
    const [searchField, setSearchField] = useState("");

    const filterData = () => {
        if (searchField === "") {
            setFilteredData(data)
        }
        if (isNaN(searchField)) {
            let filter = data.filter(element => element.province.includes(searchField))
            setFilteredData(filter);
        }
    }

    const onSearch = value => {
        setSearchField(value);
    }

    useEffect(() => {
        filterData();
    }, [searchField])

    return (
        <div style={{ width: '100%' }}>
            <Search placeholder="กรุณากรอกข้อความ" allowClear onSearch={onSearch} />
        </div>
    )
}

export default SearchBar;
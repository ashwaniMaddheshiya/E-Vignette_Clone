import React from 'react'
import Select from 'react-select'


const techCompanies = [
    { label: "Apple", value: 1 },
    { label: "Facebook", value: 2 },
    { label: "Netflix", value: 3 },
    { label: "Tesla", value: 4 },
    { label: "Amazon", value: 5 },
    { label: "Alphabet", value: 6 },
];

const DropDownSelect = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <Select options={techCompanies} />
                    <Select options={techCompanies} />
                </div>
            </div>
        </div>
    )
}

export default DropDownSelect
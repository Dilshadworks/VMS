import React from 'react'
import VisitorTbody from '../VisitorTbody/VisitorTbody'
import VisitorThead from '../VisitorThead/VisitorThead'

function Table({Columns, rows, isAdministorCompTable}) {
    console.log("columns", Columns)
    console.log("rows", rows)
    return (
        <>
            <table className="table">
                <thead className="thead">
                    <VisitorSearch />
                    <VisitorThead className="thead" TheadItem={Columns}/>
                </thead>
                <tbody>
                <VisitorTbody TbodyItems={rows} isAdministorCompTable={isAdministorCompTable} />
                </tbody>
            </table>
        </>
    )
}

export default Table;

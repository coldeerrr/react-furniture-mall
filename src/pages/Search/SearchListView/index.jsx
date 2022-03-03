import React from "react";
import Item from "./Item";

const SearchListView = props => {
    return (
        <div>
            {
                props.keywords.map((keyword, index) => {
                    return <Item key={index} data={keyword}/>
                })
            }
        </div>
    )
}

export default SearchListView
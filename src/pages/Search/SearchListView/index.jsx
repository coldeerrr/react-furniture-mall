import React from "react";
import Item from "./Item";

const SearchListView = props => {
    return (
        <div>
            {
                props.keywords.map(keyword => {
                    return <Item key={keyword.id} data={keyword}/>
                })
            }
        </div>
    )
}

export default SearchListView
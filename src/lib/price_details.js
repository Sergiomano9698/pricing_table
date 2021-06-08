import React from 'react';
import './pricing_table.css'
import './css/bootstrap.min.css'
function pricing_details(props){
    const list_data = [
        {"name":"Basic"}
    ];
    // {list_data.map(datas => (
    //     console.log(datas) 
    // ))}    
    return (        
            <div class="generic_feature_list">
                <ul>
                    <li>{props.title}</li>
                </ul>
            </div>
    );   
 }

 export default pricing_details;
import React from 'react';
import './pricing_table.css'
import './css/bootstrap.min.css'
import Price_details from './price_details'
function pricing_table(props){
    const list_data = [
        {"name":"Basic"}
    ];

    const price_details = [
        {"title":"2GB Bandwidth"}
    ];
    // console.log(props.price_list) 
    // {props.price_list.map(datas => (
    //     console.log(datas.name) 
    // ))}    
    return (
<div id="generic_price_table">   
<section>

        <div class="container">
            
            <div class="row">
                {props.price_list.map(data => (
                <div class="col-md-4">
                
                    <div className={`generic_content ${data.primary_status === true ? "active" : ""} clearfix`}>
                        
                        <div class="generic_head_price clearfix">
                        
                            <div class="generic_head_content clearfix">
                            
                                <div class="head_bg"></div>
                                <div class="head">
                                    <span>{data.name}</span>
                                </div>
                                
                            </div>
                            <div class="generic_price_tag clearfix">	
                                <span class="price">
                                    <span class="sign">{data.currency} </span>
                                    <span class="currency">{data.price}</span>
                                    <span class="month">/{data.month_or_year}</span>
                                </span>
                            </div>
                        </div>                         
                        {/* <Price_details title="2GB Bandwidth"/>
                        <Price_details title="150GB Storage"/>
                        <Price_details title="12 Accounts"/>
                        <Price_details title="7 Host Domain"/>
                        <Price_details title="24/7 Support"/> */}
                        

                        {data.features.map(price =>(
                            <Price_details title={price.title}/>
                        ))}
                        

                        <div class="generic_price_btn clearfix">
                            <a class="" href={data.redirect_url}>Sign up</a>
                        </div>
                    </div>
                </div>
                ))}
               </div>
        </div>
    </section>             
</div>
    );   
 }

 export default pricing_table;
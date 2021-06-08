import logo from './logo.svg';
import './App.css';
import Pricing_table from './lib/pricing_table'
import Price_details from './lib/pricing_table'
function App() {

  const price_description = [
    {
      "name":"Basic",
      "currency": "$",
      "price": "60",
      "month_or_year": "Mon",
      "redirect_url": "https://www.google.com/",
      "features":[
        {"title":"2GB Bandwidth"},
        {"title":"150GB Storage"},
        {"title":"12 Accounts"},
        {"title":"7 Host Domain"},
        {"title":"24/7 Support"}
      ]
    },
    {
      "name":"Standard",
      "currency": "$",
      "price": "75",
      "month_or_year": "Mon",
      "redirect_url": "https://www.google.com/",
      "primary_status": true,
      "features":[
        {"title":"2GB Bandwidth"},
        {"title":"150GB Storage"},
        {"title":"12 Accounts"},
        {"title":"7 Host Domain"},
        {"title":"24/7 Support"}
      ]
    },
    {
      "name":"Unlimited",
      "currency": "$",
      "price": "100",
      "redirect_url": "https://www.google.com/",
      "month_or_year": "Mon",
      "features":[
        {"title":"2GB Bandwidth"},
        {"title":"150GB Storage"},
        {"title":"12 Accounts"},
        {"title":"7 Host Domain"},
        {"title":"24/7 Support"}
      ]
    },
    
];
  return (
      <Pricing_table price_list={price_description}/>
      
  );
}

export default App;

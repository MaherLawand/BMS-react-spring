import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState , useContext, useEffect } from 'react';
import { UserContext } from './UserContext';
import '../css/Statistics.css';

const Statistics = () => {

    const {user,setUser} = useContext(UserContext);
    const [date,setDate] = useState(0);
    const [stockdate,setStockDate] = useState(0);
    const[dataSales,setDataSales]=useState(null);
    const[dataStock,setDataStock]=useState(null);
    const[profitLoss,setProfitLoss]= [];
    const[dataSalesRevenue,setDataSalesRevenue] = useState(0);
    const[dataStockExpenses,setDataStockExpenses] = useState(0);
    const[render,setRender]=useState(null);

    const salesrevenue=[];
    const stockexpenses=[];
    const profit=[];

    var vardataStockExpenses=0;
    var vardataSalesRevenue=0;
    
 

    const GetSalesByMonth =async () => {
        try{
            await fetch(decodeURIComponent(`http://localhost:8080/sales/getAllSalesByMonth/?` + new URLSearchParams({
                id: user.userId
            })),  
            {
            method:"GET",
            headers:{
                "Content-Type":"application/json/; charset=UTF-8",
           },
        })
            .then((res) => res.json())
            .then((data) => {
                if(data!==null){
                setDataSales(data);
                setDate(data[0].day.substring(0,10))
                console.log("in sale: " + date)
                
            }})
        }catch(error){
            console.log(error)
        }
    } 
    useEffect(()=>{
        if(dataSales!==null && dataStock!==null){
            dataSales.map((sale,index)=>{              
                if(date===sale.day.substring(0,10)){  
                    vardataSalesRevenue+=(sale.hivePrice*sale.nbOfHivesSold)+(sale.honeyJarPrice*sale.nbOfHoneyJarsSold)+(sale.foodPrice*sale.nbOfFoodSold)+(sale.drugPrice*sale.nbOfDrugsSold);     
                    // setDataSalesRevenue(dataSalesRevenue+(sale.hivePrice*sale.nbOfHivesSold)+(sale.honeyJarPrice*sale.nbOfHoneyJarsSold)+(sale.foodPrice*sale.nbOfFoodSold)+(sale.drugPrice*sale.nbOfDrugsSold));
                }
                else{
                    salesrevenue.push({dataSalesRevenue:vardataSalesRevenue,
                    day:sale.day});
                    vardataSalesRevenue=0;
                }
                if(index===dataSales.length-1){
                    salesrevenue.push({dataSalesRevenue:vardataSalesRevenue,
                        day:sale.day});
                }
                setDate(sale.day.substring(0,10))
            })
            
             dataStock.map((stock,index)=>{
                if(stockdate===stock.day.substring(0,10)){
                    // console.log("inStock" + (dataStockExpenses+(stock.priceOfAllHives)+(stock.priceOfAllApiaries)+(stock.priceOfAllJars)+(stock.priceOfAllFood)+(stock.priceOfAllDrugs)))
                    vardataStockExpenses+=(stock.priceOfAllHives)+(stock.priceOfAllApiaries)+(stock.priceOfAllJars)+(stock.priceOfAllFood)+(stock.priceOfAllDrugs);
                    // setDataStockExpenses((dataStockExpenses+(stock.priceOfAllHives)+(stock.priceOfAllApiaries)+(stock.priceOfAllJars)+(stock.priceOfAllFood)+(stock.priceOfAllDrugs)));
                }else{
                    stockexpenses.push({dataStockExpenses:vardataStockExpenses,
                    day:stock.day})
                    vardataStockExpenses=0;
                }
                if(index===dataStock.length-1){
                    stockexpenses.push({dataStockExpenses:vardataStockExpenses,
                        day:stock.day})
                }
                setStockDate(stock.day.substring(0,10))
            })
    }

         for(let i=0;i<stockexpenses.length;i++){
            profit.push({day:stockexpenses[i].day,
            profit:salesrevenue[i].dataSalesRevenue-stockexpenses[i].dataStockExpenses
            })
        }
        setRender(profit);
    },[dataSales,dataStock,date,stockdate])

    
    
    const GetStockByMonth =async () => {
        try{
            await fetch(decodeURIComponent(`http://localhost:8080/stock/getAllStockByUser/?` + new URLSearchParams({
                id: user.userId
            })),  
            {
            method:"GET",
            headers:{
                "Content-Type":"application/json/; charset=UTF-8",
           },
        })
            .then((res) => res.json())
            .then((data) => {
                if(data!==null){
                setDataStock(data);
                setStockDate(data[0].day.substring(0,10))
                console.log("in stock: " + stockdate)
            }})
        }catch(error){
            console.log(error)
        }
    } 
    
    useEffect(()=>{
        GetSalesByMonth();
        GetStockByMonth();
    },[])
    return (  
        <div className='wrapper'>
           {( dataSales!==null &&
             <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                    width={400}
                    height={400}
                    data={dataSales}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="nbOfHivesSold" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="nbOfHoneyJarsSold" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="nbOfFoodSold" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    <Area type="monotone" dataKey="nbOfDrugsSold" stackId="1" stroke="#dfg658" fill="#dfg658" /> 
                    
                    /* 
                      ?Change Color 
                    */
                    
                    </AreaChart>
                </ResponsiveContainer>               
            )}

            {( dataStock!==null &&
             <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                    width={400}
                    height={400}
                    data={dataStock}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                    >
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
            
                        <Area type="monotone" dataKey="nbofHives" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="nbOfApiaries" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="jarsFilledWithHoney" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="totalNbOfJars" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="totalNbOfFood" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="totalNbOfDrugs" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    
                    </AreaChart>
                </ResponsiveContainer>               
            )}
            <div className='profit-wrapper'>
                {( (dataStock!==null && dataSales!==null) &&
                <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                        width={400}
                        height={400}
                        data={render}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                        >
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />                
                            <Area type="monotone" dataKey="profit" stackId="1" stroke="#8884d8" fill="#8884d8" />                      
                        </AreaChart>
                    </ResponsiveContainer>               
                )}

            </div>
        </div>
    );
}
 
export default Statistics;
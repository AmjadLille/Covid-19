import React from 'react'
import {Cards, Charts, CountryPicker} from './components'
import style from './App.module.css'
import {fetchData} from './api'
import covid from './img/red-update.jpg'

class App extends React.Component{
    state= {
        data:{},
        country: '',
    }
    async componentDidMount(){
        const fetchedData = await fetchData()
        this.setState({data : fetchedData})
    }

    handleCountryChange = async (country) =>{
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country: country})
    }

    render(){

const {data, country} = this.state;       
        return (
            <div className={style.container}>
                <img className={style.img} src={covid} />
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country}/>
            </div>
        )
    }
}

export default App
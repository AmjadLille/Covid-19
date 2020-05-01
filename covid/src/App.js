import React from 'react'
import {Cards, Chart, CountryPicker} from './components'
import style from './App.module.css'

class App extends React.Component{
    render(){
        return (
            <div className={style.container}>
                <Cards />
                <CountryPicker />
                <Chart/>
            </div>
        )
    }
}

export default App
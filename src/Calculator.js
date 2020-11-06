import React, { useState } from 'react'
import { row1Nums, row2Nums, row3Nums, row4Nums } from './Data'
import './Calculator.css'

const Calculator = () => {
    const [number, setnumber] = useState(0);
    const [history, setHistory] = useState(0);
    const [status, setstatus] = useState(true);
    const [operator, setOperator] = useState('')

    const screenHandler = (e) => {
        if (status === true) {
            if (number === 0) {
                setnumber(e.target.value)
            } else {
                setnumber(number + e.target.value)
            }
        }
        if (number.length === 22) {
            setstatus(false)
        }


    }
    const handlePlus = () => {
        setHistory(number)
        if (number !== 0) {
            setnumber('+')
        }
        setstatus(true)
    }
    const handleMinus = () => {
        setHistory(number)
        if (number !== 0) {
            setnumber('-')
        }
        setstatus(true)
    }
    const handleQisma = () => {
        setHistory(number)
        if (number !== 0) {
            setnumber('/')
        }
        setOperator('qisma')
        setstatus(true)
    }

    const handledarb = () => {
        setHistory(number)
        if (number !== 0) {
            setnumber('x')
        }
        setOperator('darb')
        setstatus(true)
    }

    const handleequal = () => {
        if (operator === 'qisma') {
            setnumber(parseFloat(history) / parseFloat(number.substring(1)))
            setstatus(false)
            setHistory(0)
        }
        if (operator === 'darb') {
            setnumber(parseFloat(history) * parseFloat(number.substring(1)))
            setstatus(false)
            setHistory(0)
        } else {
            if (history != 0) {
                setnumber(parseFloat(number) + parseFloat(history))
                setHistory(0)
                setstatus(false)
            }

        }

    }

    const handleC = () => {
        setstatus(true)
        setnumber(0)
        setHistory(0)
    }

    const handleD = () => {
        setnumber(number.substr(0, number.length - 1))
    }

    return (
        <div className='container' >
            <div className='screen'>
                <h5 className='history'> {history} </h5>
                <h1 className='nums'> {number} </h1>

            </div>
            <div className='btns-container'>
                <div className='row1'>
                    {row1Nums.map((num) => (
                        <button className="btn" value={num} onClick={screenHandler} >{num}</button>
                    ))}
                    <button className='qisma btn' onClick={handleQisma} >
                        /
                </button>
                    <button className='delete-all btn ' onClick={handleC}>
                        C
                </button>
                </div>
                <div className='row2'>
                    {row2Nums.map((num) => (
                        <button className="btn" value={num} onClick={screenHandler} >{num}</button>
                    ))}
                    <button className='darb btn' onClick={handledarb}>
                        *
                </button>
                    <button className='delete btn' onClick={handleD}>
                        DEL
                </button>
                </div>
                <div className='row3'>
                    {row3Nums.map((num) => (
                        <button className="btn" value={num} onClick={screenHandler} >{num}</button>
                    ))}
                    <button className='minus btn' onClick={handleMinus} >
                        -
                </button>
                </div>
                <div className='row4'>
                    {row4Nums.map((num) => (
                        <button className="btn" value={num} onClick={screenHandler} >{num}</button>
                    ))}
                    <button className='plus btn ' value='+' onClick={handlePlus}>
                        +
                </button>
                    <button className='equal btn ' onClick={handleequal}>
                        =
                </button>
                </div>
            </div>
            <p className='writes'>created by <a href='https://github.com/4bdeladim' className='name'>Abdeladim</a> </p>
        </div>
    )
}

export default Calculator

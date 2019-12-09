"use strict"

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { login } from '../creators'
import { useHistory } from 'react-router'

const formStyle = {
    maxWidth: '400px'
}

const LoginForm = ({ status, login }) => {

    const [
        state,
        setState
    ] = useState({
        email: '',
        password: ''
    })

    const {
        email,
        password
    } = state

    const history = useHistory()


    useEffect(() => {

        if (status === 'success') {
            history.push('/')
        }

    }, [status])

    const handleEmailChange = ({ target }) => {
        const { value: email } = target
        setState(state => ({
            ...state,
            email
        }))
    }

    const handlePasswordChange = ({ target }) => {
        const { value: password } = target
        setState(state => ({
            ...state,
            password
        }))
    }

    const handleSubmit = () => {
        login({
            email,
            password
        })
    }


    return (
        <div>
            <form className='container-fluid'
                style={formStyle}>
                <div className="form-group">
                    <label htmlFor="inputEmail">Email: </label>
                    <input type="email"
                        id="inputEmail"
                        className="form-control"
                        disabled={status === 'loading'}
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword">Password: </label>
                    <input type="password"
                        id="inputPassword"
                        className="form-control"
                        disabled={status === 'loading'}
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter Password" />
                </div>
                <div>
                    <button type="submit"
                        className="btn btn-primary"
                        disabled={status === 'loading'}
                        onClick={handleSubmit}>Submit</button>
                    {status === 'loading' && <div className="ml-3 spinner-border" />}
                    {status === 'unauthenticated' && <span className="ml-3 badge badge-warning">Incorrect email and password combination</span>}
                    {status === 'error' && <span className="ml-3 badge badge-danger">An error occurred</span>}
                </div>
            </form>
        </div>
    )
}

export default connect(
    ({ login }) => {
        const { status = 'idle' } = login
        return { status }
    },
    { login }
)(LoginForm)
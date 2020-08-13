import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class Login extends Component {

    constructor(props) {
        super(props)
      
        let isLogged = false;
        this.state = {
            email: '',
            password: '',
            isLogged,
        }
    }


    chnagehandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submithandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://samystudios.com/api/admin/sign-in',this.state)
            .then(res => {
                console.log(res)
                localStorage.setItem('auth', JSON.stringify(res.data.user.jwtToken))
                this.setState({isLogged:true})
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        if(this.state.isLogged){
            return <Redirect to="/Admin" />
        }
        const { email, password } = this.state
        return (
            <div>
                <form onSubmit={this.submithandler}>
                    <div className="d-flex justify-content-center align-items-center bg-img">
                        <div className="card p-4">
                            <h3 className="log-top">Transforming Business through
                            Innovative Storytelling.
                  </h3>
                            <p className="log-cont">We help brand grow and thrive through laser-focused bespoke solution.Innovation,
                            transparency,and quality are the cornerstones of our professional approach
                  </p>
                            <div className="slide-left">
                                <div className="form-group">
                                    <label >Email</label>
                                    <input type="email" className="form-control" name="email" value={email} onChange={this.chnagehandler} />
                                </div>
                                <div className="form-group">
                                    <label >Password</label>
                                    <input type="Password" className="form-control" name="password" value={password} onChange={this.chnagehandler} />
                                </div>
                                <p>Forget Password ? <a>Click here</a></p>
                                <div className="w-100 mt-5">
                                    <button className="left" type="submit">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

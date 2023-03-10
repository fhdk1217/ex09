import React from 'react'
import { NavLink, Route, Switch, withRouter } from 'react-router-dom'
import Favorite from './Favorite'
import Home from './Home'
import Join from './Join'
import Local from './Local'
import Login from './Login'

const Menu = ({history}) => {
    let email=sessionStorage.getItem("email");
    const style={
        color:'pink'
    }
    const onLogout = (e) => {
        e.preventDefault();
        sessionStorage.removeItem('email');
        history.push('/');
    }

    return (
        <div>
            <div className='menu'>
                <NavLink to="/" activeStyle={style} exact={true}>Home</NavLink>
                <NavLink to="/local" activeStyle={style}>맛집검색</NavLink>
                <NavLink to="/favorite" activeStyle={style}>즐겨찾기</NavLink>
                {email ?
                    <NavLink to="#" onClick={onLogout}>로그아웃</NavLink>
                    :
                    <NavLink to="/login" activeStyle={style}>로그인</NavLink>
                }
                {email && <span style={{paddingLeft:'20px'}}>{email}</span>}
            </div>
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/local" component={Local}/>
                <Route path="/favorite" component={Favorite}/>
                <Route path="/login" component={Login}/>
                <Route path="/join" component={Join}/>
            </Switch>
        </div>
    )
}

export default withRouter(Menu)
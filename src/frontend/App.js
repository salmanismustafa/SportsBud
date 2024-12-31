import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PreferencesPage from './pages/PreferencesPage';
import NotificationComponent from './components/NotificationComponent';

const App = () => {
    return (
        <Router>
            <div>
                <NotificationComponent />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/preferences" component={PreferencesPage} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
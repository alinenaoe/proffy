import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import TeachersList from './pages/TeachersList';
import TeachersForm from './pages/TeacherForm';
import Register from './pages/Register';
import Login from './pages/Login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Landing} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/study" component={TeachersList} exact />
            <Route path="/teach" component={TeachersForm} exact />
        </BrowserRouter>
    )
}
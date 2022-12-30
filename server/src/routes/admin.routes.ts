import express from 'express'
import adminHandler from '../handlers/admin.handler'

const adminHandle = new adminHandler()

const adminRoute = (app: express.Application) => {
    app.post('/admin-register', adminHandle.create)
    app.post('/admin-check-email', adminHandle.checkEmail)
    app.post('/admin-login', adminHandle.authenticate)
}

export default adminRoute

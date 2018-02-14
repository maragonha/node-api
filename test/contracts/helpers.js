import supertest from 'supertest'
import chai from 'chai'
import Joi from 'joi'
import joiAssert from 'joi-assert'
import App from '../../app'

global.app = App
global.request = supertest(app)
global.expect = chai.expect
global.Joi = Joi
global.joiAssert = joiAssert

const app = require('./../index');

const supertest = require("supertest");

const request = supertest(app);

describe('Todos Test Routes', function(){
    it('Test post method', function(){
        request.post("/todo").send({ title: "Test Title", status: "Test Status"}).then((res)=> {
            expect(res.statusCode).toEqual(200)
            expect(res.body).toEqual(
              jasmine.objectContaining({ status: "Test Status" })
            );
        });
    });
    it('Test post method', function(){
        request.post("/todo").then(res =>{
            expect(res.body).toEqual(jasmine.any(Array));
            expect(res.body.length).toEqual(5)
        })
    });
    
})
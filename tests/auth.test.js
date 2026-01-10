const request = require("supertest");
const mongoose = require("mongoose");

const app = require("../server");

let token;
let userId;

beforeAll(async () => {
    process.env.NODE_ENV  = "test"
})

afterAll(async () => {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
})

describe("Auth Service API", () => {

    it("should create a user", async () => {
        const res = await request(app).post("/api/users/create").send({
            name: "Test User",
            email: "testuser@example.com",
            password: "Test1234"
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
        userId = res.body.user._id;
    });

    it("should login user and return token", async () => {
        const res = await request(app)
        .post("/api/auth/login")
        .send({
            email: "testuser@example.com",
            password: "Test1234"
        });

        expect(res.statusCode).toBe(200);
        expect(res.body.token).toBeDefined();
        token = res.body.token;
    });

    it("should fetch users with valid token", async () => {
        const res = await request(app)
        .get("/api/users")
        .set("Authorization", `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body.success).toBe(true);
    });

})

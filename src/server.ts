import fastify from "fastify";
import cors from "@fastify/cors";
import { DrivesParams } from "./models/drives-params-model";
import {teams, drivers} from "./repostories/f1-resposity"
 
const server = fastify({ logger: true });

server.register(cors, {
    origin: "*",
});



server.get("/teams", async (request, response) => {
    response.type("application/json").code(200)
    return {teams};
});

server.get("/drives", async (request, Response) => {
    Response.type("application/json").code(200)
    return {drivers};
});



server.get<{Params: DrivesParams}>("/drivers/:id", async (request, Response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find( (d) => d.id === id);

    if(!drivers){
        Response.type("application/json").code(404);
        return { message: " Driver Not Found"};
    } else {
        Response.type("application/json").code(200)
        return {driver};
    }
});

server.listen({ port: 3333 }, () => {
    console.log(`Servidor iniciado`);
});
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { createUserDTO } from "src/dto/create-user-dto";
import { updatePatchDTO } from "src/dto/update-patch-dto";
import { updatePutDTO } from "src/dto/update-put-dto";

@Controller('/users')
export class userController {
    @Post()
    async create (@Body() body: createUserDTO) {
        return {body};
    }

    @Get(':id')
    async show (@Param() @Param('id', ParseIntPipe) id: number) {
        return {users: {}, id};
    }

    @Get()
    async list () {
        return {user: []};
    }

    @Put(':id')
    async update(@Body(){name, email, password}: updatePutDTO,@Param('id', ParseIntPipe) id: number) {
        return{
            method: 'put',
            name,
            email,
            password, 
            id
        };
    }

    @Patch(':id')
    async updatePartial(@Body(){name, email, password}:updatePatchDTO,@Param('id', ParseIntPipe) id: number) {
        return{
            method: 'patch',
            name,
            email,
            password, 
            id
        };
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return{id};
    }

}
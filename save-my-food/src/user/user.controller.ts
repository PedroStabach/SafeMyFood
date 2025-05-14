import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";

@Controller('/users')
export class userController {
    @Post()
    async create (@Body() body) {
        return body;
    }

    @Get(':id')
    async readonly (@Body()body, @Param() params) {
        return {body, params};
    }

    @Get()
    async readAll (@Body()body) {
        return {body};
    }

    @Put('id')
    async updateAll(@Body()body, @Param() params) {
        return{body, params};
    }

    @Patch('id')
    async updateOnly(@Body()body, @Param() params) {
        return{body, params};
    }

    @Delete('id')
    async delete(@Param() params) {
        return{params};
    }

}
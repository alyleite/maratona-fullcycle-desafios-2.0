import { Body, Controller, Delete, Get, Param, Post, Put, Req, Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Maratona } from './maratona.model';

@Controller('maratona')
export class MaratonaController {

    constructor(
        @InjectRepository(Maratona)
        private readonly maratonaRepository: Repository<Maratona>,
    ) {

    }

    @Get()
    async index(): Promise<Maratona[]> {
        return await this.maratonaRepository.find();
    }

    @Post()
    async store(@Req() request: Request) {
        const obj = this.maratonaRepository.create(request.body as any);
        await this.maratonaRepository.save(obj);
        return obj;
    }

    @Get(':id')
    async get(@Param('id') id: string) {
        return await this.maratonaRepository.findOne(id);
    }


    @Put(':id/update')
    async update(@Param('id') id: string, @Body() obj: Maratona) {
        return await this.maratonaRepository.update(id, obj);
    }


    @Delete(':id/delete')
    async delete(@Param('id') id: string) {
        return await this.maratonaRepository.delete(id);
    }
}

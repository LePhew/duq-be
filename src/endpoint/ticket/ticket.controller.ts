import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Ticket } from '../../interfaces/ticket';
import { TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {

    constructor(
        private _ticketService: TicketService
    ) { }


    @Get()
    getAll() {
        return this._ticketService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this._ticketService.getOne(id);
    }

    @Post()
    create(@Body() data: Ticket) {
        return this._ticketService.create(data);
    }

    @Put(':id/update')
    update(@Param('id') id: string, @Body() data: Partial<Ticket>) {
        this._ticketService.update(id, data);
        return this._ticketService.getOne(id);
    }

    @Post('cierre')
    generarCierre() {
        this._ticketService.generarCierre();
    }
}

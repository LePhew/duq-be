import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Ticket } from '../../interfaces/ticket';
import { TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {
  constructor(private _ticketService: TicketService) {}

  @Get()
  getAll() {
    return this._ticketService.getAll();
  }

  @Get('cerrados')
  getCerrados() {
    return this._ticketService.getCerrados();
  }

  @Get('cerrados/byday')
  getCerradosByDay() {
    return this._ticketService.getCerradosByDay();
  }
  @Get('cerrados/bymonth')
  getCerradosByMonth() {
    return this._ticketService.getCerradosByMonth();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this._ticketService.getOne(id);
  }

  @Get('cerrados/tonelajebycompany')
  getTonelajeByCompany() {
    return this._ticketService.getTonelajeByCompany();
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

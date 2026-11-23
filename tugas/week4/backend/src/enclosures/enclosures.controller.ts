import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { EnclosuresService } from './enclosures.service';
import { CreateEnclosureDto } from './dto/create-enclosure.dto';
import { UpdateEnclosureDto } from './dto/update-enclosure.dto';

/**
 * Controller Enclosures: Menangani routing HTTP request untuk endpoint /enclosures.
 * Menggunakan Dependency Injection pada constructor untuk memanggil EnclosuresService.
 */
@Controller('enclosures')
export class EnclosuresController {
  constructor(private readonly enclosuresService: EnclosuresService) {}

  // POST /enclosures - Menambahkan data enclosure baru
  @Post()
  create(@Body() createEnclosureDto: CreateEnclosureDto) {
    return this.enclosuresService.create(createEnclosureDto);
  }

  // GET /enclosures - Mengambil seluruh data enclosure
  @Get()
  findAll() {
    return this.enclosuresService.findAll();
  }

  // GET /enclosures/:id - Mengambil satu enclosure dengan konversi & validasi ParseIntPipe
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.enclosuresService.findOne(id);
  }

  // PATCH /enclosures/:id - Memperbarui sebagian/seluruh field enclosure
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEnclosureDto: UpdateEnclosureDto,
  ) {
    return this.enclosuresService.update(id, updateEnclosureDto);
  }

  // DELETE /enclosures/:id - Menghapus data enclosure berdasarkan ID
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.enclosuresService.remove(id);
  }
}

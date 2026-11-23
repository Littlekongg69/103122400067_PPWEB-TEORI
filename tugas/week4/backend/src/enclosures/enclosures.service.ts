import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateEnclosureDto } from './dto/create-enclosure.dto';
import { UpdateEnclosureDto } from './dto/update-enclosure.dto';
import { Enclosure } from './entities/enclosure.entity';

/**
 * Service Enclosures: Menangani logika bisnis & penyimpanan data di memori (in-memory array).
 */
@Injectable()
export class EnclosuresService {
  // Penyimpanan sementara di memori beserta 4 data awal (seed) sesuai aset gambar
  private enclosures: Enclosure[] = [
    {
      id: 1,
      name: 'Amazonian Understory',
      type: 'amazon',
      temperature: 25.2,
      humidity: 88,
      isMistingActive: true,
      lastMaintenance: '2026-10-05',
      inhabitants: [
        'Ranitomeya amazonica (Dart Frog)',
        'Marcgravia sintenisii',
        'Porcellionides pruinosus (Isopod)',
        'Folsomia candida (Springtail)',
      ],
    },
    {
      id: 2,
      name: 'Montane Cloud Forest',
      type: 'cloud',
      temperature: 20.8,
      humidity: 94,
      isMistingActive: true,
      lastMaintenance: '2026-10-01',
      inhabitants: [
        'Marcgravia sintenisii',
        'Pleurothallis Orchid',
        'Live Sphagnum Moss',
        'Trichorhina tomentosa (Dwarf White Isopod)',
      ],
    },
    {
      id: 3,
      name: 'Madagascar Spiny Forest',
      type: 'spiny',
      temperature: 29.5,
      humidity: 42,
      isMistingActive: false,
      lastMaintenance: '2026-09-28',
      inhabitants: [
        'Lepidodactylus lugubris (Mourning Gecko)',
        'Alluaudia procera',
        'Porcellionides pruinosus (Isopod)',
      ],
    },
    {
      id: 4,
      name: 'Borneo Peat Swamp',
      type: 'peat',
      temperature: 26.1,
      humidity: 82,
      isMistingActive: true,
      lastMaintenance: '2026-09-20',
      inhabitants: [
        'Bucephalandra motleyana',
        'Cryptocoryne',
        'Folsomia candida (Springtail)',
      ],
    },
  ];

  // Penanda auto-increment ID berikutnya
  private nextId = 5;

  /**
   * Memeriksa apakah nama enclosure sudah digunakan (case-insensitive).
   * Melempar ConflictException (HTTP 409) jika terjadi duplikasi.
   */
  private ensureUniqueName(name: string, excludeId?: number): void {
    const normalized = name.trim().toLowerCase();
    const isDuplicate = this.enclosures.some(
      (item) =>
        item.name.trim().toLowerCase() === normalized && item.id !== excludeId,
    );

    if (isDuplicate) {
      throw new ConflictException(
        `Enclosure dengan nama "${name}" sudah terdaftar.`,
      );
    }
  }

  /**
   * Menambahkan enclosure baru ke dalam array memori.
   */
  create(createEnclosureDto: CreateEnclosureDto): Enclosure {
    this.ensureUniqueName(createEnclosureDto.name);

    const newEnclosure: Enclosure = {
      id: this.nextId++,
      name: createEnclosureDto.name.trim(),
      type: createEnclosureDto.type,
      temperature: createEnclosureDto.temperature,
      humidity: createEnclosureDto.humidity,
      isMistingActive: createEnclosureDto.isMistingActive,
      lastMaintenance: createEnclosureDto.lastMaintenance,
      inhabitants: createEnclosureDto.inhabitants ?? [],
    };

    this.enclosures.push(newEnclosure);
    return newEnclosure;
  }

  /**
   * Mengambil seluruh daftar enclosure.
   */
  findAll(): Enclosure[] {
    return this.enclosures;
  }

  /**
   * Mengambil satu enclosure berdasarkan ID.
   * Melempar NotFoundException (HTTP 404) jika ID tidak ditemukan.
   */
  findOne(id: number): Enclosure {
    const found = this.enclosures.find((item) => item.id === id);
    if (!found) {
      throw new NotFoundException(
        `Enclosure dengan ID #${id} tidak ditemukan.`,
      );
    }
    return found;
  }

  /**
   * Memperbarui data enclosure berdasarkan ID.
   * Memeriksa keberadaan ID (404) dan keunikan nama baru (409).
   */
  update(id: number, updateEnclosureDto: UpdateEnclosureDto): Enclosure {
    const existing = this.findOne(id);

    if (updateEnclosureDto.name !== undefined) {
      this.ensureUniqueName(updateEnclosureDto.name, id);
      existing.name = updateEnclosureDto.name.trim();
    }
    if (updateEnclosureDto.type !== undefined) {
      existing.type = updateEnclosureDto.type;
    }
    if (updateEnclosureDto.temperature !== undefined) {
      existing.temperature = updateEnclosureDto.temperature;
    }
    if (updateEnclosureDto.humidity !== undefined) {
      existing.humidity = updateEnclosureDto.humidity;
    }
    if (updateEnclosureDto.isMistingActive !== undefined) {
      existing.isMistingActive = updateEnclosureDto.isMistingActive;
    }
    if (updateEnclosureDto.lastMaintenance !== undefined) {
      existing.lastMaintenance = updateEnclosureDto.lastMaintenance;
    }
    if (updateEnclosureDto.inhabitants !== undefined) {
      existing.inhabitants = updateEnclosureDto.inhabitants;
    }

    return existing;
  }

  /**
   * Menghapus enclosure berdasarkan ID.
   * Melempar NotFoundException (HTTP 404) jika ID tidak ditemukan.
   */
  remove(id: number): { message: string; deleted: Enclosure } {
    const index = this.enclosures.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(
        `Enclosure dengan ID #${id} tidak ditemukan.`,
      );
    }

    const [deleted] = this.enclosures.splice(index, 1);
    return {
      message: `Enclosure "${deleted.name}" (ID #${id}) berhasil dihapus.`,
      deleted,
    };
  }
}

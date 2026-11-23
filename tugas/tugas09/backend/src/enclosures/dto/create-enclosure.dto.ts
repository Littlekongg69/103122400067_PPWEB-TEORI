import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

/**
 * DTO untuk validasi input saat membuat Enclosure baru (POST /enclosures).
 * Menggunakan decorator class-validator yang diperiksa oleh ValidationPipe global.
 */
export class CreateEnclosureDto {
  // Nama enclosure wajib berupa string dengan panjang minimal 3 karakter
  @IsString()
  @MinLength(3)
  name: string;

  // Tipe bioma harus salah satu dari 4 kategori yang didukung
  @IsIn(['amazon', 'cloud', 'spiny', 'peat'])
  type: 'amazon' | 'cloud' | 'spiny' | 'peat';

  // Suhu dalam derajat Celsius (rentang aman 10°C hingga 40°C)
  @IsNumber()
  @Min(10)
  @Max(40)
  temperature: number;

  // Kelembapan relatif dalam persen (0% hingga 100%)
  @IsNumber()
  @Min(0)
  @Max(100)
  humidity: number;

  // Status aktif/tidaknya sistem pengabutan otomatis
  @IsBoolean()
  isMistingActive: boolean;

  // Tanggal perawatan terakhir dalam format string ISO 8601
  @IsDateString()
  lastMaintenance: string;

  // Daftar spesimen penghuni (opsional, berupa array string)
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  inhabitants?: string[];
}

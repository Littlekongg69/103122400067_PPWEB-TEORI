import { PartialType } from '@nestjs/mapped-types';
import { CreateEnclosureDto } from './create-enclosure.dto';

/**
 * DTO untuk pembaruan data Enclosure (PATCH /enclosures/:id).
 * PartialType membuat seluruh properti CreateEnclosureDto menjadi opsional
 * dengan tetap mempertahankan aturan validasi class-validator-nya.
 */
export class UpdateEnclosureDto extends PartialType(CreateEnclosureDto) {}

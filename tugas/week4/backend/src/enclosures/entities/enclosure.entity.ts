/**
 * Entity Enclosure (Model Data Kandang / Tangki Terarium)
 * Disimpan sementara di dalam memori (tanpa database) sesuai spesifikasi BAB 9.
 */
export class Enclosure {
  id: number;
  name: string;
  type: 'amazon' | 'cloud' | 'spiny' | 'peat';
  temperature: number;
  humidity: number;
  isMistingActive: boolean;
  lastMaintenance: string;
  inhabitants?: string[];
}

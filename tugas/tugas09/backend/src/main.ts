import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Entry point aplikasi NestJS.
 * Mengaktifkan CORS untuk akses dari frontend serta ValidationPipe global.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Mengizinkan frontend mengakses REST API lintas origin (CORS)
  app.enableCors();

  // Mengaktifkan validasi DTO otomatis secara global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Menghapus properti yang tidak didefinisikan di DTO
      transform: true, // Mengonversi tipe payload sesuai deklarasi DTO
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();

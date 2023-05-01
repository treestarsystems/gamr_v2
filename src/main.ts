import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Test
 *
 * @param {string} test - Test.
 * @returns {Promise<string>} test return.
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

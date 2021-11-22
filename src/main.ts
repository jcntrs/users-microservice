import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { RabbitMQ } from './common/constants';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    Transport: Transport.RMQ,
    options: {
      urls: [process.env.AMQP_URL],
      queue: RabbitMQ.UserQueue
    }
  });
  await app.listen();
}

bootstrap();

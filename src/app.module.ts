import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Đảm bảo đã nhập đúng ConfigModule và ConfigService
import { ExamModule } from './exam/exam.module';
import { ExamResultModule } from './exam-result/exam-result.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,  // Đảm bảo ConfigService có thể được sử dụng toàn cục
      envFilePath: '.env', // Đảm bảo tệp .env được tìm thấy
    }),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URL'), // Lấy giá trị từ biến môi trường
      }),
      inject: [ConfigService], // Đảm bảo ConfigService được inject vào
    }),
    ExamModule,
    ExamResultModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

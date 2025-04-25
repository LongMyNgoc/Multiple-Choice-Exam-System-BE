import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ExamModule } from './exam/exam.module';
import { ExamResultModule } from './exam-result/exam-result.module';

@Module({
  imports: [
    // 👇 Đây là nơi bạn kết nối đến MongoDB (local)
    MongooseModule.forRoot('mongodb://mongo:lIEJwUhyMDJaAizGRvvLpNfAMBmwWBYw@interchange.proxy.rlwy.net:54666'), 
    ExamModule,
    ExamResultModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

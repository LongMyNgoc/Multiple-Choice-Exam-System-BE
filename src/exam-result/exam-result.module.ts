import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExamResult, ExamResultSchema } from './exam-result.schema';
import { ExamResultService } from './exam-result.service';
import { ExamResultController } from './exam-result.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ExamResult.name, schema: ExamResultSchema }]),
  ],
  controllers: [ExamResultController],
  providers: [ExamResultService],
  exports: [ExamResultService], // nếu muốn dùng service ở module khác
})
export class ExamResultModule {}

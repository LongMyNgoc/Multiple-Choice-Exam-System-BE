import { Controller, Post, Body } from '@nestjs/common';
import { ExamService } from './exam.service';
import { Exam } from './schemas/exam.schema';

@Controller('exams')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Post()
  async createExam(@Body() body: Exam) {
    return this.examService.create(body);
  }
}

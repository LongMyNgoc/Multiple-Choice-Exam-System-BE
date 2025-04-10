import { Controller, Post, Body, Get, Query, Put, Param, Delete } from '@nestjs/common';
import { ExamService } from './exam.service';
import { Exam } from './exam.schema';

@Controller('exams')
export class ExamController {
  constructor(private readonly examService: ExamService) { }

  @Post()
  async createExam(@Body() body: Exam) {
    return this.examService.create(body);
  }

  @Get('all')
  async getAllExams() {
    return this.examService.findAll();
  }

  @Get()
  async getExamsByTitle(@Query('title') title: string) {
    return this.examService.findByTitle(title);
  }
  @Put(':id')
  async updateExam(@Param('id') id: string, @Body() updateData: Partial<Exam>) {
    return this.examService.update(id, updateData);
  }

  @Delete(':id')
  async deleteExam(@Param('id') id: string) {
    return this.examService.delete(id);
  }
}

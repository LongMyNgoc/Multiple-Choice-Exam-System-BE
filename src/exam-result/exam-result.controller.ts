import { Controller, Post, Body, Query, Get, Param } from '@nestjs/common';
import { ExamResultService } from './exam-result.service';
import { ExamResult } from './exam-result.schema';

@Controller('exam-result')
export class ExamResultController {
    constructor(private readonly examResultService: ExamResultService) { }

    @Post()
    async submitResult(@Body() body: Partial<ExamResult>) {
        try {
            return await this.examResultService.create(body);
        } catch (error) {
            return {
                success: false,
                message: error.message || 'Failed to submit exam result',
            };
        }
    }
    @Get()
    async getResultsByUser(@Query('userEmail') userEmail: string) {
        return this.examResultService.findByUserEmail(userEmail);
    }
    @Get('all')
    async getAllResults() {
        return this.examResultService.findAll();
    }
    // API để lấy danh sách kết quả theo từng đề thi, trả về các userEmail
    @Get('by-title/:title')
    async getResultsByTitle(@Param('title') title: string) {
        return this.examResultService.findByTitle(title); // Tìm kiếm theo title của đề thi
    }
    // API để lấy chi tiết bài thi của user theo title
    @Get('detail/:title/:userEmail')
    async getExamDetail(@Param('title') title: string, @Param('userEmail') userEmail: string) {
        return this.examResultService.findByTitleAndUserEmail(title, userEmail); // Lấy kết quả chi tiết theo đề thi và userEmail
    }
}

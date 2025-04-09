import { Controller, Post, Body } from '@nestjs/common';
import { ExamResultService } from './exam-result.service';
import { ExamResult } from './exam-result.schema';

@Controller('exam-result')
export class ExamResultController {
    constructor(private readonly examResultService: ExamResultService) {}

    @Post()
    async submitResult(@Body() body: Partial<ExamResult>) {
        return this.examResultService.create(body);
    }
}

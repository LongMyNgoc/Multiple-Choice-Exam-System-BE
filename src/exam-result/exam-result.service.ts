import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExamResult, ExamResultDocument } from './exam-result.schema';

@Injectable()
export class ExamResultService {
    constructor(
        @InjectModel(ExamResult.name) private examResultModel: Model<ExamResultDocument>,
    ) {}

    async create(data: Partial<ExamResult>): Promise<ExamResult> {
        const result = new this.examResultModel(data);
        return result.save();
    }
    async findByUserEmail(userEmail: string): Promise<ExamResult[]> {
        return this.examResultModel.find({ userEmail }).exec();
    }    
}

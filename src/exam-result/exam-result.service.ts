import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExamResult, ExamResultDocument } from './exam-result.schema';

@Injectable()
export class ExamResultService {
    constructor(
        @InjectModel(ExamResult.name) private examResultModel: Model<ExamResultDocument>,
    ) { }

    async create(data: Partial<ExamResult>): Promise<ExamResult | null> {
        const existing = await this.examResultModel.findOne({
            userEmail: data.userEmail,
            title: data.title,
        });
    
        if (existing) {
            // Nếu đã tồn tại kết quả với userEmail và title này, không cho nộp lại
            throw new Error('User has already submitted the exam for this exam.');
        }
    
        const result = new this.examResultModel({
            ...data,
            submittedAt: new Date(), // đảm bảo có submittedAt
        });
    
        return result.save();
    }
    
    async findByUserEmail(userEmail: string): Promise<ExamResult[]> {
        return this.examResultModel.find({ userEmail }).exec();
    }
    // exam-result.service.ts
    async findAll(): Promise<ExamResult[]> {
        return this.examResultModel.find().exec();
    }
    async findByTitle(title: string): Promise<ExamResult[]> {
        return this.examResultModel.find({ title }).exec();
    }
    
    async findByTitleAndUserEmail(title: string, userEmail: string): Promise<ExamResult | null> {
        return this.examResultModel.findOne({ title, userEmail }).exec();
    }
}

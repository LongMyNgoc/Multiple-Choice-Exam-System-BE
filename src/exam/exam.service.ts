import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Exam, ExamDocument } from './schemas/exam.schema';

@Injectable()
export class ExamService {
  constructor(@InjectModel(Exam.name) private examModel: Model<ExamDocument>) {}

  async create(examData: Exam): Promise<Exam> {
    const createdExam = new this.examModel(examData);
    return createdExam.save();
  }
  async findAll(): Promise<Exam[]> {
    return this.examModel.find().exec();
  }  
  async findByTitle(title: string): Promise<Exam[]> {
    return this.examModel.find({ title: new RegExp(title, 'i') }).exec();
  }
}

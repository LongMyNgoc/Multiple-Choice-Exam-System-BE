import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Exam, ExamDocument } from './exam.schema';

@Injectable()
export class ExamService {
  constructor(@InjectModel(Exam.name) private examModel: Model<ExamDocument>) { }

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

  async update(id: string, updateData: Partial<Exam>): Promise<Exam | null> {
    return this.examModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }

  async delete(id: string): Promise<Exam | null> {
    return this.examModel.findByIdAndDelete(id).exec();
  }

}

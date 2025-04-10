import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExamDocument = Exam & Document;

@Schema()
export class Exam {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  startAt: string;

  @Prop({ required: true })
  createdAt: string;

  @Prop({
    type: [
      {
        question: String,
        options: [String],
        correctAnswer: Number,
      },
    ],
    required: true,
  })
  questions: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

export const ExamSchema = SchemaFactory.createForClass(Exam);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExamResultDocument = ExamResult & Document;

@Schema()
export class ExamResult {
    @Prop({ required: true })
    userEmail: string;

    @Prop({ required: true })
    title: string;

    @Prop([{
        question: String,
        options: [String], // <-- thêm
        selectedOption: Number,
        correctAnswer: Number,
        isCorrect: Boolean,
    }])
    questions: {
        question: string;
        options: string[];         // <-- thêm
        selectedOption: number;
        correctAnswer: number;
        isCorrect: boolean;
    }[];    

    @Prop()
    score: number;

    @Prop()
    submittedAt: Date;
}

export const ExamResultSchema = SchemaFactory.createForClass(ExamResult);

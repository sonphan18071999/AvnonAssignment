import { QuestionTypeEnum } from "../enums/question-type.enum";
import { BaseQuestion } from "./base-question.model";

export interface ParagraphQuestion extends BaseQuestion {
    type: QuestionTypeEnum.PARAGRAPH;
}

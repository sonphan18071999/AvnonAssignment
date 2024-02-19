import { QuestionTypeEnum } from "../enums/question-type.enum";
import { BaseQuestion } from "./base-question.model";

export interface CheckboxQuestion extends BaseQuestion {
  type: QuestionTypeEnum.CHECKBOX;
  options: { value: string; label: string }[];
}

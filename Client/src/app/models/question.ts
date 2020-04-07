import { Base } from './base';

export class Question extends Base {
    id: number; // id question
    idBank?: number; // id ngân hàng câu hỏi
    name: string; // tên đề thi
    idTest?: string; // dạng json '[1, 2]' danh sách test
    content: string; // nội dung câu hỏi
    type: number; // kiểu câu hỏi
    answer: string; // danh sách đáp án lựa chọn '["", ""]'
    correct: string; // danh sách đáp án đúng '[]'
    level: number; // mức độ
}
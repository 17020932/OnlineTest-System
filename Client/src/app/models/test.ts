import { Base } from './base';

export class Test extends Base {
    id: number; // id test
    password?: string; // password nếu có
    code: string; // mã đề thi
    name: string; // tên đề thi
    datePublic: Date; // ngày xuất bản
    time: any; // thời gian làm bài
    status: number; // trạng thái đề thi đóng/ mở
    amount: number; // số lượt thi
    isPublic?: boolean;
}
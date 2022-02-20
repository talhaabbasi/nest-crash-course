import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  private students = students;

  getStudents(): FindStudentResponseDto[] {
    return this.students;
  }

  getStudentById(id: string): FindStudentResponseDto {
    return this.students.find((student) => student.id === id);
  }

  createStudent(payload: CreateStudentDto): StudentResponseDto {
    const student = {
      id: uuid(),
      ...payload,
    };
    this.students.push(student);
    return student;
  }

  updateStudent(
    payload: UpdateStudentDto,
    studentId: string,
  ): StudentResponseDto {
    let student = this.students.find((student) => student.id === studentId);
    student = {
      id: studentId,
      ...payload,
    };
    return student;
  }
}

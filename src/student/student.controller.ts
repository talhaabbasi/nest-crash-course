import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';

@Controller('student')
export class StudentController {
  @Get()
  getStudents(): FindStudentResponseDto[] {
    return 'All Students';
  }

  @Get('/:studentId')
  getStudentsById(
    @Param('studentId') studentId: string,
  ): FindStudentResponseDto {
    console.log(studentId);
    return `Get Student with id ${studentId} `;
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto) {
    console.log(body);
    return 'Create Student';
  }

  @Put()
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ) {
    return `Update Student with Id of ${studentId} with Data of ${JSON.stringify(
      body,
    )}`;
  }
}

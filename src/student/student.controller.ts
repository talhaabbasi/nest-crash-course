import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('student')
export class StudentController {
  @Get()
  getStudents() {
    return 'All Students';
  }

  @Get('/:studentId')
  getStudentsById(@Param('studentId') studentId: string) {
    console.log(studentId);
    return `Get Student with id ${studentId} `;
  }

  @Post()
  createStudent(@Body() body) {
    console.log(body);
    return 'Create Student';
  }

  @Put()
  updateStudent(@Param('studentId') studentId: string, @Body() body) {
    return `Update Student with Id of ${studentId} with Data of ${JSON.stringify(
      body,
    )}`;
  }
}

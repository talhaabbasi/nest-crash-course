import { Controller, Get } from '@nestjs/common';

@Controller('student')
export class StudentController {
  @Get()
  getStudents() {
    return 'All Students';
  }

  @Get('/:studentId')
  getStudentsById() {
    return 'Get Student By Id';
  }
}

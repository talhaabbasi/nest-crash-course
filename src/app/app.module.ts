import { Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports: [StudentModule],
})
export class AppModule {}

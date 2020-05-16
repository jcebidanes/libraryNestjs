import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { Book } from './books/book.model';

@Module({
  imports: [
    BooksModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'librarydb',
      entities: [Book],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

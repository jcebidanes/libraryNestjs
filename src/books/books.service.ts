import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.model';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
    
    constructor(
        @InjectRepository(Book)
        private readonly booksRepo: Repository<Book>
    ) {}

    getBooks(): Promise<any> {
        return this.booksRepo.find();
    }

    getBook(bookID: number ): Promise<any> {
        return this.booksRepo.findOneOrFail(bookID);
    }

    addBook(rawBook: any): Promise<any> {
        let book = this.booksRepo.create(rawBook as any);
        return this.booksRepo.save(book);
    }

    async deleteBook(bookID: number): Promise<any> {
            return this.booksRepo.delete(bookID);


        // let book = await this.getBook(bookID);
        // console.log(book);

        // try {
        //     // let resolve = await this.booksRepo.delete(bookID);
        //     console.log(resolve);
            
        //     if( resolve.raw.length > 0 ){
        //         return { "ok": resolve.raw};
        //     } else {
        //         return { "ok": 404};
        //     }

        // }
        // catch (err) {
        //     console.log(err);
        //     if (err.name === "EntityNotFound") {
        //         throw new HttpException(`Book with id ${bookID} doesn't exist!`, 404);
        //     }
        // }

        
    }
}

